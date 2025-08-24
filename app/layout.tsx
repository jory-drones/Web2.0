import "./globals.css";
import { Inter, Orbitron } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });                     // use className
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" }); // expose CSS var

export const metadata = {
  title: "SecurityDrones.ai",
  description: "Fully autonomous drone security system.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Inter drives body text; Orbitron variable used for headings via CSS utility */}
      <body className={`${inter.className} ${orbitron.variable} text-text`}>{children}</body>
    </html>
  );
}
