module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_3f: "#ffffff3f",
          A700_19: "#ffffff19",
          A700: "#ffffff",
          A700_0c: "#ffffff0c",
          A700_05: "#ffffff05",
        },
        purple: { A100: "#f197f4" },
        blue_gray: { 800: "#2b3a63" },
        black: { 900: "#000000", "900_7f": "#0000007f" },
      },
      boxShadow: { xs: "0px 0px 45px 0px #000000a5", sm: "0px 0px 25px 0px #ffffff7f" },
      fontFamily: { jura: "Jura", padyakkeexpandedone: "Padyakke Expanded One" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
