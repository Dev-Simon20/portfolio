import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import fav from "@/pics/favShop.ico";

export const metadata: Metadata = {
   title: "My Little Shop",
   // description:
   //    "Ingeniero de Sistemas especializado en desarrollo web frontend y backend. Creando soluciones digitales modernas, eficientes y escalables para empresas y startups.",
   authors: [{ name: "Dev Simmon", url: "https://tudominio.com" }],
   creator: "Hugo J. Simón",
   publisher: "Simon Contreras",
   icons: {
      icon: fav.src,
   },
};

export default function MyLyttleShopLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <main className={`w-full min-h-screen relative bg-white `}>
         <SessionProvider>{children}</SessionProvider>
      </main>
   );
}
