/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      "forest",
      "cupcake",
    ],
  },
  content: ['index.html'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),
  require("@catppuccin/tailwindcss")({
    prefix: "ctp",
    defaultFlavour: "mocha",
  }),
  ],
}

