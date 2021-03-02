import React from "react";
import { useParams } from "react-router-dom";
import Shoe from "../../Services/shoes.json";
import Style from "./ProductsSec.module.css";
import Grid from "@material-ui/core/Grid";

export default function ProductsSec() {
   let { id } = useParams();
   let Shoes = Shoe[id];
   return (
      <div className={Style.mainContainer}>
         <Grid container>
            <Grid item xs={12} sm={12} md={8}>
               <div className={Style.conatiner1}>
                  <img src={Shoes.img} alt={Style.shoesImage} />
               </div>
            </Grid>
            <Grid item md={4}>
               <div className={Style.container2}>
                  <h1>Name: {Shoes.name}</h1>
                  <h1>Price: {Shoes.price}</h1>
                  <button className={Style.btn}>Add To Cart</button>
               </div>
            </Grid>
         </Grid>
      </div>
   );
}
