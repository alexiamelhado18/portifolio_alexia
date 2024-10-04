import type { Metadata } from "next";
import "./globals.css";

//componentes
import { Banner } from "./components/Banner";


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
      <body>
        <h1 style={{ position: "absolute", opacity: 0 }}>Página inicial - portfólio de Aléxia Vitória</h1>
        <Banner />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
