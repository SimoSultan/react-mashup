import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, FilterableProductTable, Pokedex } from "./components/export";
import { PRODUCTS } from './components/products/data.js';


function App() {
  
  return (
    
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/pokemon" exact component={() => <Pokedex />} />
          <Route path="/products" exact component={() => <FilterableProductTable products={PRODUCTS} />} />
        </Switch>
        <Footer />
      </Router>

  );
}

export default App;