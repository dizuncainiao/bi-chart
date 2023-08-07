// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-standard-vue',
    'stylelint-config-html'
    // 'stylelint-config-prettier',
  ],
  overrides: [
    {
      files: '**/*.less',
      customSyntax: 'postcss-less',
      extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-less',
        'stylelint-config-recess-order'
      ]
    }
  ],
  rules: {
    'no-duplicate-selectors': null,
    'selector-class-pattern': null,
    'no-descending-specificity': null // 禁止低优先级的选择器出现在高优先级的选择器之后
  }
}
