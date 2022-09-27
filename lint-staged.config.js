module.exports = {
  './src/**/*.{js,jsx,ts,tsx}': ['yarn lint --max-warnings=0'],
  './src/**/*.+(ts|tsx|js|jsx|json|yml|yaml|md|mdx)': ['prettier --write'],
}
