import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'c8',
      lines: 80,
      statements: 80,
      branches: 80,
    },
    // ...
  },
})
