import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Products } from "./Products";
import { ContactUs } from "./ContactUs";
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
               <Route exact path="/product" component={Products} />
               <Route path="/product/:id" component={ProductIteam} />
               <Route
                  path="*"
                  component={() => {
                     return <h1>404 not Found</h1>;
                  }}
               />
            </Switch>
         </Router>
      </div>
   );
};
