import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Product } from "./Product";
import { ProductIteam } from "./ProductIteam";
import { NavBar } from "./NavBar";

export function Routes() {
   return (
      <Router>
         <NavBar />
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/product" component={Product} />
            <Route path="/product/:id" component={ProductIteam} />
            <Route path="*" component={() => <h3>404 Not Found</h3>} />
         </Switch>
      </Router>
   );
}
