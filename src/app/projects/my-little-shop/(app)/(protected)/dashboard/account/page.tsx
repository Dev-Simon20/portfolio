import { prismaShop } from "@/app/projects/my-little-shop/lib/shop-db";
import { auth } from "@/auth";

const MyProfilePage = async () => {
   const session = await auth();

   if (!session?.user.id) {
      return <>Usuario no autenticado</>;
   }

   const userDB = await prismaShop.user.findUnique({
      where: {
         id: session.user.id,
      },
   });
   console.log(userDB); 
   return <div>MyProfilePage</div>;
};
export default MyProfilePage;
