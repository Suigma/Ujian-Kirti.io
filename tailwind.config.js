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
    fontFamily: {
      display: ['lexend', 'Comic Sans MS', 'sans-serif'],
      body: ['lexend', 'Comic Sans MS', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui"),
  require("@catppuccin/tailwindcss")({
    prefix: "ctp",
    defaultFlavour: "mocha",
  }),
  ],
}

