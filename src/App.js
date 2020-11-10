import React from "react";
import './App.css'

import { 
    Navigation, 
    Footer, 
    Home, 
    FilterableProductTable, 
    Pokedex,
    AllChgs,
    LoginMovieChg,
    BusinessCard,
    BillTip,
} from "./components/export";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PRODUCTS } from './components/products/data.js';


function App() {

  
    return (

        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/" component={() => <Home />} />
                <Route path="/pokemon" component={() => <Pokedex />} />
                <Route path="/products" component={() => <FilterableProductTable products={PRODUCTS} />} />
                {/* THIS BELOW WORKS THE SAME AS ABOVE AND I HAVE NO IDEA WHY YET */}
                <Route path="/buzzy" component={AllChgs} />
                <Route path="/login" component={LoginMovieChg} />
                <Route path="/business" component={BusinessCard} />
                <Route path="/bill" component={BillTip} />
            </Switch>
            <Footer />
        </Router>

    );
}

export default App;