import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Header} from "./_ui/header/header"
import { Navbar, LinkItem} from "./_ui/navbar/navbar";
import Link from "next/link";

import "./globals.css";
import { Footer } from "./_ui/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boda de Jessi y Leo",
  description: "Boda de Jessi y Leo 15 / 06 / 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links: LinkItem[] = [
    {
      label: "Confirmar",
      url: "confirm"
    },
    {
      label: "Mapa",
      url: "map"
    },
    {
      label: "Menu",
      url: "menu"
    } 
  ]
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header couple="LeO & JeSSI" date="15 / 06 / 2024">
          <Navbar pages={links}/>
          <ul className="flex justify-center items-center hover:text-punk-p">
            <li>
              <Link href="https://www.amazon.com.mx/wedding/registry/IILDTEHNKYJG" target="_blank">🎁 Mesa de regalos</Link>
            </li>
          </ul>
        </Header>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
