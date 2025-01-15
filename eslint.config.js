import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        plugins: {
            react: pluginReact,
            'react-hooks': pluginReactHooks,
        },
        rules: {
            ...pluginReact.configs.flat.recommended.rules,
            ...pluginReactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 0,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    eslintPluginPrettierRecommended,
]
