import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

//${geistSans.variable} ${geistMono.variable}

export const metadata: Metadata = {
  title: "Cv Builder by Naatal",
  description: "CV Builder by Naatal est une plateforme intuitive permettant de créer des CV professionnels en quelques clics. Elle offre des modèles personnalisables, une exportation en PDF et une optimisation pour le recrutement. Idéale pour étudiants, freelances et professionnels. 🚀",
    icons: [{ rel: 'icon', url: '/public/logo.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
