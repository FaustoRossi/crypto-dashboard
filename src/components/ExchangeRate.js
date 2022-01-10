import React from "react";

function ExchangeRate({
	exchangeRate,
	chosenSecondaryCurrency,
	chosenPrimaryCurrency,
}) {
	return (
		<div className="exchange-rate">
			<h1>Exchange Rate</h1>
			<h1>{exchangeRate}</h1>
			<p>
				{chosenPrimaryCurrency} to {chosenSecondaryCurrency}
			</p>
		</div>
	);
}

export default ExchangeRate;
