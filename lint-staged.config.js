module.exports = {
  './src/**/*.{js,jsx,ts,tsx}': ['yarn validate'],
  './src/**/*.+(ts|tsx|js|jsx|json|yml|yaml|md|mdx)': ['prettier --write'],
}
