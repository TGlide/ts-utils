import { execSync } from 'child_process'
import fs from 'fs'

import glob from 'glob'

// Get all ts files from src folder, excluding test files
const tsFiles = new glob.GlobSync('src/**/*.ts', { ignore: 'src/**/*.test.ts' })

// Run the command `tsup ${tsFiles.join(' ')}` on the command line, no more comments:
execSync(`pnpm tsup ${tsFiles.found.join(' ')} --dts`, { stdio: 'inherit' })

// Copy all dist files to the root folder
glob.sync('./dist/**/*').forEach((file) => {
  fs.copyFileSync(file, file.replace('/dist/', '/'))
})
