import React from "react";
import Footer from "../components/footer";
import Haeder from "../components/Appbar";
import ProductsComponents from "../components/ProductsComponents/productsComponents";

export default function ProductsList() {
   return (
      <div>
         <Haeder />
         <ProductsComponents />
         <Footer />
      </div>
   );
}
