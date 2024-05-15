import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "mine-shaft": {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#333333",
          "950": "#262626",
        },
        "powder-blue": {
          "50": "#f0fafb",
          "100": "#daf0f3",
          "200": "#afdde5",
          "300": "#88cad8",
          "400": "#50acc0",
          "500": "#3590a5",
          "600": "#2f758b",
          "700": "#2c6072",
          "800": "#2b515f",
          "900": "#284451",
          "950": "#162c36",
        },
        derby: {
          "50": "#fef7ee",
          "100": "#fbe9d0",
          "200": "#f7d8b1",
          "300": "#f2bb7f",
          "400": "#ec954b",
          "500": "#e77828",
          "600": "#d95f1d",
          "700": "#b4491a",
          "800": "#8f3a1d",
          "900": "#74321a",
          "950": "#3e170c",
        },
      },
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
