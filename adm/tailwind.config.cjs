const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  "daisyui":{
    "themes": [
      {
        "light":{
          primary:"#88A0A8",
          "base-100":"#DBD3C9"
        }
      }
    ]
  },
  theme: {
    extend: {},
  },

  plugins: [require('daisyui')],
};

module.exports = config;