import js from '@eslint/js'
import ftFlow from 'eslint-plugin-ft-flow'
import react from 'eslint-plugin-react'
import hermesParser from 'hermes-eslint'
import globals from 'globals'

export default [
  js.configs.recommended,
  react.configs.flat.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      parser: hermesParser,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      'ft-flow': ftFlow,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'ft-flow': {
        onlyFilesWithFlowAnnotation: true,
      },
    },
    rules: {
      ...ftFlow.configs.recommended.rules,
      'semi': [2, 'never'],
      'indent': ['error', 2],
    },
  },
]
