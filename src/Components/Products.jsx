import React from "react";
import Shoe from "../Services/shoes.json";
import { Link } from "react-router-dom";

export const Products = () => {
   return (
      <div>
         <h1>Product</h1>

         {Object.keys(Shoe).map((val, ind) => {
            return (
               <Link to={`product/${val}`} key={ind}>
                  <h1>{Shoe[val].name}</h1>
                  <img src={Shoe[val].img} />
               </Link>
            );
         })}
      </div>
   );
};
