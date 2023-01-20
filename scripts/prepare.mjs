import { execSync } from 'child_process'
import fs from 'fs'

import glob from 'glob'

// Run the command `tsup ${tsFiles.join(' ')}` on the command line, no more comments:
execSync(`pnpm tsup ./src/index.ts --format esm,cjs --dts`, {
  stdio: 'inherit',
})

// Copy all dist files to the root folder
glob.sync('./dist/**/index.d.ts').forEach((file) => {
  fs.copyFileSync(file, file.replace('/dist/', '/'))
})
