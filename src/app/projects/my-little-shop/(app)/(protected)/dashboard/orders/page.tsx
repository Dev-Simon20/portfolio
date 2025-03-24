import { Order } from "@/app/projects/my-little-shop/types/order";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { DataTableDemo } from "@/app/projects/my-little-shop/components/table_orders/to";
import { useRouter } from "next/navigation";
import Link from "next/link";

const TableOrders = dynamic(
   () => import("../../../../components/table_orders/table_orders"),
   {
      ssr: false,
      loading: () => (
         <div className="flex justify-center items-center h-40">
            <p>Loading....</p>
         </div>
      ),
   }
);

const orders: Order[] = [
   {
      code: 1,
      date: "2024-05-18T00:00:00",
      quantity: 5,
      expectedEarnings: 85,
      status: "paid",
      customer: "Libre",
   },
   {
      code: 2,
      date: "2025-01-15T00:00:00",
      quantity: 4,
      expectedEarnings: 84,
      status: "due",
      customer: "Pedro",
   },
   {
      code: 3,
      date: "2025-05-15T00:00:00",
      quantity: 5,
      expectedEarnings: 85,
      status: "due",
      customer: "Libre",
   },
   {
      code: 4,
      date: "2025-05-15T14:00:00",
      quantity: 6,
      expectedEarnings: 86,
      status: "paid",
      customer: "Libre",
   },
   {
      code: 5,
      date: "2025-06-10T00:00:00",
      quantity: 3,
      expectedEarnings: 70,
      status: "paid",
      customer: "Maria",
   },
   {
      code: 6,
      date: "2024-07-20T00:00:00",
      quantity: 2,
      expectedEarnings: 50,
      status: "due",
      customer: "Carlos",
   },
   {
      code: 7,
      date: "2024-08-05T00:00:00",
      quantity: 7,
      expectedEarnings: 95,
      status: "paid",
      customer: "Ana",
   },
   {
      code: 8,
      date: "2025-09-12T00:00:00",
      quantity: 8,
      expectedEarnings: 110,
      status: "due",
      customer: "Libre",
   },
   {
      code: 9,
      date: "2024-10-30T13:00:00",
      quantity: 5,
      expectedEarnings: 90,
      status: "paid",
      customer: "Jose",
   },
   {
      code: 10,
      date: "2025-12-01T00:00:00",
      quantity: 4,
      expectedEarnings: 75,
      status: "due",
      customer: "Libre",
   },
];

const OrdersPage = async () => {
   return (
      <div className=" min-h-full p-2 md:p-6">
         <div className="flex justify-between w-full">
            <h2 className="text-xl md:text-3xl">Orders</h2>
            <Link href={"/projects/my-little-shop/dashboard/orders/new-order"} className="">
               <Button className="rounded-2xl">
                  <PlusCircle className="!w-6 !h-6" />
                  New Order
               </Button>
            </Link>
         </div>
         <TableOrders ordersBack={orders} />
      </div>
   );
};
export default OrdersPage;
