import { Poppins } from "next/font/google";
import { Abril_Fatface } from "next/font/google";
import { DM_Sans } from "next/font/google";

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
