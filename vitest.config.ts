import { defineConfig } from 'vitest/config'

export default defineConfig({
  base: './src',
  test: {
    coverage: {
      provider: 'c8',
      lines: 80,
      statements: 80,
      branches: 80,
      include: ['src/**/*.ts'],
      all: true,
    },
  },
})
