import React from "react";
import Footer from "../components/footer";
import Haeder from "../components/Appbar";
import ProductsSec from "../components/SelectedProductComponets/ProductsSec";

export default function SelectedProducts() {
   return (
      <div>
         <Haeder />
         <ProductsSec />
         <Footer />
      </div>
   );
}
