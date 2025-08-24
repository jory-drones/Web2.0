import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        bg: "#0B1120",
        section: "#0E1626",
        panel: "#111A2C",
        border: "#263246",
        text: {
          DEFAULT: "#E8EEF6",
          muted: "#A8B3C7"
        },
        primary: { DEFAULT: "#2B6EF6", hover: "#3B82F6" },
        accent: "#1F2A40",
        badgeGradStart: "#FF7A59",
        badgeGradEnd: "#FEC85A"
      },
      borderRadius: { xl2: "32px" },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,.25)",
        glow: "0 0 0 1px rgba(38,50,70,.9), 0 10px 30px rgba(0,0,0,.35)"
      }
    }
  },
  plugins: []
};
export default config;
