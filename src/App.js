import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import "./assets/scss/style.scss";

// const history = createBrowserHistory({
// 	basename: process.env.PUBLIC_URL,
// });

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/properties/:id" component={DetailsPage} />
				<Route exact path="/checkout" component={Checkout} />
			</Router>
		</div>
	);
}

export default App;
