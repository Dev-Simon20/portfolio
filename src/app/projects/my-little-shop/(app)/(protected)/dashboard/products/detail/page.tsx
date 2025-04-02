import { redirect } from "next/navigation";

const ProductDetailPage = async ({
   searchParams,
}: {
   searchParams: { cod?: string };
}) => {
   if (!searchParams.cod) {
      redirect("/projects/my-little-shop/dashboard/products");
   }
   return (
      <div>
         <h1>Detalles del Producto</h1>
         <p>Código del producto: {searchParams.cod}</p>
      </div>
   );
};
export default ProductDetailPage;
