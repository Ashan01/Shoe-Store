import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import SelectedProducts from "../pages/SelectedProducts";
import AddToCart from "../pages/AddToCart";
import Products from "../pages/Products";

export default function RouterConfig() {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={SelectedProducts} />
            <Route path="/addToCart" component={AddToCart} />
            <Route path="*" component={() => <h1>404 not found</h1>} />
         </Switch>
      </Router>
   );
}
