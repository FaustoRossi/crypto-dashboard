import React from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import NewsFeed from "./components/NewsFeed";

import "./index.css";

function App() {
	return (
		<div className="app">
			<CurrencyConverter />
			<NewsFeed />
		</div>
	);
}

export default App;
