import {
   PaymentType,
   StatusPaid,
} from "@/prisma/generated/clientShop";
import { Stock } from "./stock";
import { Customer } from "./customer";

export type ProductAll = {
   name: string;
   id: number;
   image: string;
   userId: string;
   description: string | null;
   salePrice: number;
   currentStock: number;
   orderItems: OrderItemProduct[];
   stocks: Stock[];
};

export interface OrderItemProduct {
   id: number;
   orderId: number;
   productId: number;
   quantity: number;
   order: Order;
   earnings: number;
}
interface Order {
   id: number;
   total: number;
   paymentType: PaymentType;
   status: StatusPaid;
   date: Date;
   customer: Customer;
}

