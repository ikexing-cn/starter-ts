process.env.ESLINT_TSCONFIG = 'tsconfig.json'

const braceStyle = [
  'warn', '1tbs',
  { allowSingleLine: true }
]

module.exports = {
  extends: '@antfu',
  rules: {
    'no-console': 'off',
    'comma-dangle': 'off',
    'antfu/if-newline': 'off',
    'brace-style': braceStyle,
    'vue/brace-style': braceStyle,
    '@typescript-eslint/brace-style': braceStyle,
    '@typescript-eslint/comma-dangle': ['off'],
    '@typescript-eslint/no-misused-promises': ['off']
  }
}
