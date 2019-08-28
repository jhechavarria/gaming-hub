module.exports = {
  presets: [
    '@vue/app'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/script-indent': ['error', 4, { 'baseIndent': 1 }],
    indent: ['error', 4]
  }
}
