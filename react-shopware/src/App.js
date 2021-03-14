import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Products from "./views/Products";
import Product from "./views/Product";
import LandingPage from "./views/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
