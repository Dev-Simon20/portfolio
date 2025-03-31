export type SaleFormValues = {
    client: {
        name: string;
        id: number ;
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