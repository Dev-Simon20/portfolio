export type SaleFormValues = {
    client: {
        name: string;
        id: string ;
    };
    paymentType: "cash" | "credit";
    products: {
        id: string;
        name: string;
        price: number;
        quantity: number;
    }[];
    total: number;
}