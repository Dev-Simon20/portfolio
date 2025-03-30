export type Product = {
   name: string;
   id: number;
   image: string;
   userId: string;
   description: string | null;
   purchasePrice: number;
   salePrice: number;
   currentStock: number;
};
