import React from "react";
import Shoe from "../Services/shoes.json";
import { useParams } from "react-router-dom";

export const ProductIteam = () => {
   let { id } = useParams();

   console.log(Shoe[id]);
   return (
      <div>
         <h1>ProductIteam</h1>

         <div className="productContainer">
            <h3>{Shoe[id].name}</h3>
            <img src={Shoe[id].img} alt="shoe_Product" />
         </div>
      </div>
   );
};
