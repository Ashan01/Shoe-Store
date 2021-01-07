import React from "react";
import Shoe from "../Services/shoes.json";
import "../App.css";
import { Link } from "react-router-dom";

export const Products = () => {
   return (
      <div>
         <h1>Products</h1>

         {Object.keys(Shoe).map((value, index) => {
            const shoes = Shoe[value];
            return (
               <Link className="productContainer" key={index} to={`/products/${value}`}>
                  <h3>{shoes.name}</h3>
                  <img src={shoes.img} alt="shoe_Product" />
               </Link>
            );
         })}
      </div>
   );
};
