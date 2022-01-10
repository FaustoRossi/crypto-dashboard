import React from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import NewsFeed from "./components/NewsFeed";

import "./index.css";

function App() {
	return (
		<div className="app">
			<div className="app-wrapper">
				<h1> Crypto Dashboard</h1>

				<CurrencyConverter />
			</div>
			<NewsFeed />
		</div>
	);
}

export default App;
