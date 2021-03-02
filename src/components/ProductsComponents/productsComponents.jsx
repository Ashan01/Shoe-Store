import React from "react";
import Style from "./productsComponents.module.css";
import products from "../../Services/shoes.json";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export default function ProductsList() {
   return (
      <div className={Style.mainDiv}>
         <h1>Fresh Recomandation</h1>

         <Grid container>
            {Object.keys(products).map((val, ind) => {
               return (
                  <Grid item xs={6} sm={4} md={3} lg={3} key={ind}>
                     <Link to={`/products/${val}`} className={Style.link}>
                        <div className={Style.productCol}>
                           <div className={Style.products_img}>
                              <img src={products[val].img} alt="productImage" />
                           </div>
                           <div className={Style.products_price}>
                              <h5>{products[val].name}</h5>
                           </div>
                           <div className={Style.products_desc}>
                              <p>{products[val].price}</p>
                           </div>
                        </div>
                     </Link>
                  </Grid>
               );
            })}
         </Grid>
      </div>
   );
}
