import React from "react";
import { useParams, Link } from "react-router";
import Shoe from "../Services/shoes.json";

export const ProductIteam = () => {
   let { id } = useParams();
   const shoe = Shoe[id];
   return (
      <div>
         <h1>{shoe.name}</h1>
         <img src={shoe.img} />
      </div>
   );
};
