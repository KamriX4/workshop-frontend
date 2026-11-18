// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";
import { getDefaultAttributes } from "eslint-plugin-better-tailwindcss/api/defaults";

export default withNuxt(betterTailwindcss.configs["correctness-error"], {
  settings: {
    "better-tailwindcss": {
      entryPoint: "app/assets/css/main.css",
      attributes: [
        ...getDefaultAttributes(),
        ["^v-bind:ui$", [{ match: "objectValues" }]],
      ],
    },
  },
  rules: {
    "better-tailwindcss/no-unknown-classes": [
      "error",
      { ignore: ["^stars$", "^star-layer$", "^star$"] },
    ],
    // Wyłączamy reguły formatowania Vue, żeby Prettier miał wolną rękę:
    "vue/multiline-html-element-content-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-indent": "off",
    "vue/first-attribute-linebreak": "off",
    // Wyłączamy reguły stylistyczne JS/TS (średniki, cudzysłowy, przecinki):
    "@stylistic/semi": "off",
    "@stylistic/quotes": "off",
    "@stylistic/comma-dangle": "off",
    "@stylistic/indent": "off",
    "@stylistic/brace-style": "off",
    "@stylistic/arrow-parens": "off",
  },
});
