import type { Metadata } from "next";
import "./globals.css";
import { abril, dm_sans, poppins, roboto_slab } from "@/libs/fonts";
import HeaderMain from "@/components/header_main/header_mains";
import { Toaster } from "@/components/ui/toaster";
import favicon from './favicon.ico'



export const metadata: Metadata = {
   title: {
      default: "DevSimon | Ingeniero de Sistemas & Desarrollador Web",
      template: "%s | DevSimon - Portafolio Profesional",
   },
   description:
      "Ingeniero de Sistemas especializado en desarrollo web frontend y backend. Creando soluciones digitales modernas, eficientes y escalables para empresas y startups.",
   keywords: [
      "desarrollador web",
      "ingeniero de sistemas",
      "frontend",
      "backend",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "desarrollo web",
      "portafolio",
      "freelance",
   ],
   authors: [{ name: "Dev Simmon", url: "https://tudominio.com" }],
   creator: "Hugo J. Simón",
   publisher: "Simon Contreras", 
   icons:{
      icon:favicon.src
      
   }
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${poppins.variable} ${abril.variable} ${dm_sans.variable} ${roboto_slab.variable} relative text-gray-700`}
         >
            <Toaster />
            {/* <HeaderMain/> */}
            {children}
            
         </body>
      </html>
   );
}
