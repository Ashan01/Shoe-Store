import React from "react";
import { Link } from "react-router-dom";
import Shoe from "../shoes.json";
import "../App.css";

export const Product = () => {
   return (
      <div>
         <h1> Product</h1>

         <div className="productContainer">
            {Object.keys(Shoe).map((keyname) => {
               const shoe = Shoe[keyname];
               return (
                  <Link key={keyname} className="link_1" to={`/product/${keyname}`}>
                     <h3>{shoe.name}</h3>
                     <img src={shoe.img} width={150} alt="" />
                  </Link>
               );
            })}
         </div>
      </div>
   );
};
