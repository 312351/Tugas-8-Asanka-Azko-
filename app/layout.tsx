import type { Metadata } from "next";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Roboto } from "next/font/google";
import { Geist, Geist_Mono,Nunito } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400","500","700"],
  variable: "--font-Roboto"
})

const Helvetica = Nunito({
  subsets: ["latin"],
  variable: "--font-helvetica",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "My App",
  description: "Next.js with Roboto + Tailwind + Toastify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Helvetica.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
