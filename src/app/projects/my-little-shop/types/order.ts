import { PaymentType, StatusPaid } from "@/prisma/generated/clientShop";
import { Customer } from "./customer";

export interface Order {
   id: number;
   total: number;
   paymentType: PaymentType;
   status: StatusPaid;
   date: Date;
   customer: Customer;
}
