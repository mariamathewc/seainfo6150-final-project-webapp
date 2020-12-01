import React, { useEffect, useState, Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";

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


import Foo from "./Foo/Foo.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
    id: "article-1",
    title: "An Article",
    author: "April Bingham",
    text: "Some text in the article",
};

function App() {

    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            // performs a GET request
            const response = await fetch("https://run.mocky.io/v3/f3b46e2f-1ec5-45e6-8fbc-14022272f9dd");
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
                <Route path="/foo" exact component={Foo} />
                {/* passing parameters via a route path */}
                <Route
                    path="/bar/:categoryId/:productId"
                    exact
                    render={({ match }) => (
                        // getting the parameters from the url and passing
                        // down to the component as props
                        <Bar
                            categoryId={match.params.categoryId}
                            productId={match.params.productId}
                        />
                    )}
                />
                <Route
                    path="/baz"
                    exact
                    render={() => <Baz content={externalContent} />}
                />
                <Route component={Error} />
            </Switch>
        </>
    );
}

export default App;