import React from "react";
import Banner from "../components/HomeComponents/Banner";
import HomeProducts from "../components/HomeComponents/HomeProducts";
import Footer from "../components/footer";
import Haeder from "../components/Appbar";

export default function Home() {
   return (
      <div>
         <Haeder />
         <Banner />
         <HomeProducts />
         <Footer />
      </div>
   );
}
