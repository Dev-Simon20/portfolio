import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { abril, dm_sans, poppins } from "@/libs/fonts";
import HeaderMain from "@/components/header_main/header_mains";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${abril.variable} ${dm_sans.variable} relative bg-zinc-900`}
      >
        <HeaderMain/>
        {children}
      </body>
    </html>
  );
}
