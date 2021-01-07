import React from "react";
import Shoe from "../Services/shoes.json";
import "../App.css";

export const Products = () => {
   return (
      <div>
         <h1>Products</h1>

         {Object.keys(Shoe).map((value, index) => {
            const shoes = Shoe[value];
            return (
               <div className="productContainer" key={index}>
                  <h3>{shoes.name}</h3>
                  <img src={shoes.src} alt="shoe_Product" />
               </div>
            );
         })}
      </div>
   );
};
