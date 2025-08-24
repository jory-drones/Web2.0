import "./globals.css";
import { Inter, Orbitron } from "next/font/google";

const inter = Inter({ subsets: ["latin"] }); // body font via className
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" }); // expose var for headings

export const metadata = {
  title: "SecurityDrones.ai",
  description: "Fully autonomous drone security system.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable} text-text`}>{children}</body>
    </html>
  );
}
