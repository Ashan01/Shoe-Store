import React from "react";
import Style from "./HomeProducts.module.css";
import products from "../../Services/shoes.json";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export default function ProductsList() {
   return (
      <div className={Style.mainDiv}>
         <h1>Products</h1>

         {/* <Grid container>
            {Object.keys(products).map((val, ind) => {
               return (
                  <Grid item xs={6} sm={4} md={3} lg={3} key={ind}>
                     <Link to={`/${val}`} className={Style.link}>
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
         </Grid> */}

         <Grid container>
            <Grid item xs={6} sm={4} md={3} lg={3}>
               <div className={Style.productCol}>
                  <div className={Style.products_img}>
                     <img
                        src={products["air-jordan-1-zoom-racer-blue-1"].img}
                        alt="productImage"
                     />
                  </div>
                  <div className={Style.products_price}>
                     <h5>{products["air-jordan-1-zoom-racer-blue-1"].name}</h5>
                  </div>
                  <div className={Style.products_desc}>
                     <p>{products["air-jordan-1-zoom-racer-blue-1"].price}</p>
                  </div>
               </div>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={3}>
               <div className={Style.productCol}>
                  <div className={Style.products_img}>
                     <img
                        src={products["jordan-mars-270-london"].img}
                        alt="productImage"
                     />
                  </div>
                  <div className={Style.products_price}>
                     <h5>{products["jordan-mars-270-london"].name}</h5>
                  </div>
                  <div className={Style.products_desc}>
                     <p>{products["jordan-mars-270-london"].price}</p>
                  </div>
               </div>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={3}>
               <div className={Style.productCol}>
                  <div className={Style.products_img}>
                     <img
                        src={products["air-jordan-3-valor-blue"].img}
                        alt="productImage"
                     />
                  </div>
                  <div className={Style.products_price}>
                     <h5>{products["air-jordan-3-valor-blue"].name}</h5>
                  </div>
                  <div className={Style.products_desc}>
                     <p>{products["air-jordan-3-valor-blue"].price}</p>
                  </div>
               </div>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={3}>
               <div className={Style.productCol}>
                  <div className={Style.products_img}>
                     <img
                        src={products["air-jordan-1-zoom-racer-blue"].img}
                        alt="productImage"
                     />
                  </div>
                  <div className={Style.products_price}>
                     <h5>{products["air-jordan-1-zoom-racer-blue"].name}</h5>
                  </div>
                  <div className={Style.products_desc}>
                     <p>{products["air-jordan-1-zoom-racer-blue"].price}</p>
                  </div>
               </div>
            </Grid>
         </Grid>
         <Link to="/products" className={Style.link}>
            <div className={Style.btn}>
               <button>More Products</button>
            </div>
         </Link>
      </div>
   );
}
