import { Poppins } from "next/font/google";
import { Abril_Fatface } from "next/font/google";
import { DM_Sans,Roboto_Slab } from "next/font/google";



export const poppins = Poppins({
   variable: "--font-poppins",
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const abril = Abril_Fatface({
   variable: "--font-abril",
   subsets: ["latin"],
   weight: ["400"],
});

export const dm_sans= DM_Sans({
   variable:"--dm-sans",
   subsets:["latin"],
   weight:["100","200","300","400","500","600","700","800","900","1000"]
})

export const roboto_slab= Roboto_Slab({
   variable:"--roboto_slab",
   subsets:["latin"],
   weight:["100","200","300","400","500","600","700","800","900",]
})
