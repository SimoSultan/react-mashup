import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, FilterableProductTable } from "./components/export";
import { PRODUCTS } from './components/products/data';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/pokemon" exact component={() => <Pokemon />} />
          <Route path="/products" exact component={() => <FilterableProductTable products={PRODUCTS} />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;