import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home.jsx";
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
    return (
        <>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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