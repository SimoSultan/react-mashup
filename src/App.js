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
    Tweetter,
    ExerciseTracker,
    CookieClicker,
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
                <Route path="/products" render={(props) => <FilterableProductTable props={props} products={PRODUCTS} />} />
                {/* THIS BELOW WORKS THE SAME AS ABOVE AND I HAVE NO IDEA WHY YET */}
                <Route path="/buzzy" component={AllChgs} />
                <Route path="/login" component={LoginMovieChg} />
                <Route path="/business" component={BusinessCard} />
                <Route path="/bill" component={BillTip} />
                <Route path="/tweetter" component={Tweetter} />
                <Route path="/exercise" component={ExerciseTracker} />
                <Route path="/cookies" component={CookieClicker} />
            </Switch>
            <Footer />
        </Router>

    );
}

export default App;