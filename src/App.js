import React, { useEffect, useState} from "react";
import { Switch, Route} from "react-router-dom";

import { isEmpty } from "lodash";
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Contacts from './components/Contacts.jsx';
import Account from './components/Account.jsx';
import Login from './components/Login.jsx';
import About from './components/About.jsx';
import NoMatch from './components/NoMatch.jsx';
import Campgrounds from './components/Campgrounds.jsx';
import CampCollections from './components/Seasons/CampCollections.jsx';
import CampDetails from './components/Seasons/CampDetails.jsx';
import Products from './components/Products.jsx';
import ProductCollections from './components/Products/ProductCollections.jsx';
import ProductDetails from './components/Products/ProductDetails.jsx';
import ProductCheckout from './components/Products/ProductCheckout.jsx';
import ProductShipping from './components/Products/ProductShipping.jsx';
import ThankYou from './components/Products/ThankYou.jsx';




function App() {

    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            // performs a GET request
            const response = await fetch("https://run.mocky.io/v3/246e6158-8785-4720-98fe-855045d0d8b6");
            const responseJson = await response.json();
            setFetchedData(Object.values(responseJson));
        };

        if (isEmpty(fetchedData)) {
            fetchData();
        }
    }, [fetchedData]);


    return (
        <>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <NavBar data={fetchedData} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route exact path="/login"><Login /></Route>
                <Route exact path="/about"><About /></Route>
                <Route exact path="/contacts"><Contacts /></Route>
                <Route exact path="/account"><Account /></Route>

                <Route path='/campgrounds' exact component={Campgrounds} />
                <Route exact path="/spring"><CampCollections /></Route>
                <Route exact path="/summer"><CampCollections /></Route>
                <Route exact path="/autumn"><CampCollections /></Route>
                <Route exact path="/winter"><CampCollections /></Route>
                <Route exact path="/snow"><CampCollections /></Route>
                <Route exact path="/campdetails"><CampDetails /></Route>

                <Route exact path="/products"><Products /></Route>
                <Route exact path="/tents"><ProductCollections /></Route>
                <Route exact path="/lights"><ProductCollections /></Route>
                <Route exact path="/sleeping_gear"><ProductCollections /></Route>
                <Route exact path="/packs_and_bags"><ProductCollections /></Route>
                <Route exact path="/food_processing"><ProductCollections /></Route>
                <Route exact path="/productdetails"><ProductDetails /></Route>
                <Route exact path="/checkout"><ProductCheckout /></Route>
                <Route exact path="/shipping"><ProductShipping /></Route>
                <Route exact path="/thankyou"><ThankYou /></Route>

                <Route component={NoMatch} />
            </Switch>
        </>
    );
}

export default App;