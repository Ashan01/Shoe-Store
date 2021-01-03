import React from "react";
import { useParams } from "react-router-dom";
import Shoe from "../shoes.json";

export const ProductIteam = () => {
   const { id } = useParams();
   const shoe = Shoe[id];

   return (
      <div className="link_1">
         <h3>{shoe.name}</h3>
         <img src={shoe.img} width={700} height={450} alt="" />
      </div>
   );
};
