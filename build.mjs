import { execSync } from 'child_process'

import glob from 'glob'

// Get all ts files from src folder, excluding test files
const tsFiles = new glob.GlobSync('src/**/*.ts', { ignore: 'src/**/*.test.ts' })

// Run the command `tsup ${tsFiles.join(' ')}` on the command line, no more comments:
execSync(`pnpm tsup ${tsFiles.found.join(' ')} --dts`, { stdio: 'inherit' })
