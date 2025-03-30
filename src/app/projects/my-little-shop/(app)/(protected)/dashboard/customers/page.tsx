"use client";
import { getCustomers } from "@/app/projects/my-little-shop/actions/get-customers";
import Customerslist from "@/app/projects/my-little-shop/components/customers-list/customers_list";
import FormNewCustomer from "@/app/projects/my-little-shop/components/form_new_customer/form_new_customer";
import { useSession } from "next-auth/react";
import { useEffect, useState, useTransition } from "react";

export interface Customer {
   id: number;
   name: string;
}
const CustomerPage = () => {
   const { data: session, status } = useSession();
   const [customers, setCutomers] = useState<Customer[]>([]);
   const [isPending, startTransition] = useTransition();

   const loadData = async (id: string) => {
      const response = await getCustomers(id);
      console.log("La respues es", response);

      if (response) {
         setCutomers(response);
      }
   };
   useEffect(() => {
      if (session?.user.id) {
         loadData(session.user.id);
      }
   }, [session?.user.id]);
   if (status === "loading") {
      return <h2>Loading.....</h2>;
   }
   if (!session?.user.id) {
      return <h2>Sesion no iniciada</h2>;
   }
   return (
      <div className="p-2 md:p-6">
         <h2 className="text-2xl">Customers</h2>
         <article className=" flex mt-4 gap-32 px-8">
            <Customerslist
               customers={customers}
               isPending={isPending}
               startTransition={startTransition}
            />
            <section className="flex-1">
               <FormNewCustomer
                  id={session.user.id}
                  loadData={loadData}
                  isPending={isPending}
                  startTransition={startTransition}
               />
            </section>
         </article>
         {/* <LoaderSpinner/> */}
      </div>
   );
};
export default CustomerPage;
