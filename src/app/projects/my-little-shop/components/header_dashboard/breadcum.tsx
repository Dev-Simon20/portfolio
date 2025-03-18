"use client";
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
const Breadcum = () => {
   const pathname = usePathname();
   const pathSegments = pathname.split("/").filter(Boolean);
   const customPath = pathSegments.slice(1);
   return (
      <Breadcrumb>
         <BreadcrumbList>
            {customPath.map((item, index) => (
               <Fragment key={index}>
                  <BreadcrumbItem>
                     {index !== customPath.length - 1 ? (
                        <BreadcrumbLink href={`/${item.toLowerCase()}`}>
                           {item
                              .replace(/-/g, " ")
                              .replace(/^./, (letra) => letra.toUpperCase())}
                        </BreadcrumbLink>
                     ) : (
                        <BreadcrumbPage>
                           {" "}
                           {item
                              .replace(/-/g, " ")
                              .replace(/^./, (letra) => letra.toUpperCase())}
                        </BreadcrumbPage>
                     )}
                  </BreadcrumbItem>
                  {index !== customPath.length - 1 && <BreadcrumbSeparator />}
               </Fragment>
            ))}
         </BreadcrumbList>
      </Breadcrumb>
   );
};
export default Breadcum;
