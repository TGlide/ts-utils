import fs from 'fs'

import glob from 'glob'

// Delete all dist files from the root folder
glob.sync('./dist/**/*').forEach((file) => {
  fs.unlink(file.replace('/dist/', '/'), () => {
    // no-op
  })
})
