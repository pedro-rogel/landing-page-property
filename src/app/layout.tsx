import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./layout/navBar";
import Footer from "@/app/layout/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing Page ",
  icons: "https://www.mbras.com.br/mbras-icon-light.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="pt-BR">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
        >

          <NavBar />
          {children}
          <Footer/>
          
          
        </body>
      </html>
    </>
  );
}
