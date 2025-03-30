export type SaleFormValues = {
    client: {
        name: string;
        id: string ;
    };
    paymentType: "cash" | "yape"|"plin";
    statusPaid:"paid"|"credit"
    products: {
        id: number;
        name: string;
        salePrice: number;
        quantity: number;
    }[];
    total: number;
}