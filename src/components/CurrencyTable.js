import React, { useState } from "react";
import axios from "axios";

function CurrencyTable({
	currency,
	currencyAmount,
	currencyOption,
	chosenCurrency,
}) {
	const [chosenCurrency, setChosenCurrency] = useState("BTC");
	const [amount, setAmount] = useState(1);
	const currencies = ["BTC", "ETH", "USD", "XPR", "LTC", "ADA"];

	const convert = () => {
		const options = {
			method: "GET",
			url: "https://alpha-vantage.p.rapidapi.com/query",
			params: {
				params: {
					from_currency: chosenPrimaryCurrency,
					function: "CURRENCY_EXCHANGE_RATE",
					to_currency: chosenSecondaryCurrency,
				},
			},
			headers: {
				"x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
				"x-rapidapi-key": "SIGN-UP-FOR-KEY",
			},
		};

		axios
			.request(options)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div>
			<table>
				<tbody>
					<tr>
						<td>{currency}</td>
						<td>
							<input
								type="number"
								name={currencyAmount}
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
							/>
						</td>
						<td>
							<select
								value={chosenCurrency}
								name={currencyOption}
								className="currency-option"
								onChange={(e) => setChosenCurrency(e.target.value)}
							>
								{currencies.map((currency, _index) => (
									<option key={_index}>{currency}</option>
								))}
							</select>
						</td>
					</tr>
				</tbody>
			</table>
			<button id="convert-button" onClick={convert}>
				Convert
			</button>
		</div>
	);
}

export default CurrencyTable;
