import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//componentes
import { Banner } from "./components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio - Aléxia Vitória",
  description: "Este site é sobre o portfólio da Aléxia Vitória.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Banner />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
