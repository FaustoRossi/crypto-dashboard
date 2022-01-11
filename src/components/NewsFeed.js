import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsFeed = () => {
	const [articles, setArticles] = useState(null);

	useEffect(() => {
		const options = {
			method: "GET",
			url: "https://crypto-news15.p.rapidapi.com/news/amb",
			headers: {
				"x-rapidapi-host": "crypto-news15.p.rapidapi.com",
				"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
			},
		};

		axios
			.request(options)
			.then((response) => {
				console.log(response.data);
				setArticles(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	const sevenArticles = articles?.slice(0, 5);

	return (
		<div className="news-feed">
			<h2>News Feed</h2>

			{sevenArticles?.map((article, _index) => (
				<div key={_index}>
					<a href={article.url}>
						<p>{article.title}</p>
					</a>
				</div>
			))}
		</div>
	);
};

export default NewsFeed;
