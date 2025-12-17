import "./globals.css";
import { Inter } from "next/font/google";
import LayoutClient from "./components/LayoutClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Umbrella ERP | Business & ERP Consulting",
  description:
    "Umbrella ERP provides ERP implementation, business consulting, and strategic management solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
