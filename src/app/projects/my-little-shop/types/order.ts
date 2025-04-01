import { PaymentType, StatusPaid } from "@/prisma/generated/clientShop";
import { Customer } from "./customer";
import { Product } from "./product";

interface OrderItem{
   id:number;
   orderId:number;
   productId:number;
   quantity:number;
   product:Product;

}

export interface Order {
   id: number;
   total: number;
   paymentType: PaymentType;
   status: StatusPaid;
   date: Date;
   customer: Customer;
   orderItems:OrderItem[]
}
