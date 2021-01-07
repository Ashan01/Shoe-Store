import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { ContactUs } from "./ContactUs";
import { Products } from "./Products";
import { ProductIteam } from "./ProductIteam";
import { NavBar } from "./NavBar";

export const RouterConfig = () => {
   return (
      <div>
         <Router>
            <NavBar />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/about" component={About} />
               <Route path="/contact" component={ContactUs} />
               <Route exact path="/products" component={Products} />
               <Route path="/products/:id*" component={ProductIteam} />
               <Route
                  path="*"
                  component={() => {
                     return <h1>404 Not Found</h1>;
                  }}
               />
            </Switch>
         </Router>
      </div>
   );
};
