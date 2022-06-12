import React, { useState } from "react";
import axios from "axios";

const Search = (props) => {
	const [location, setLocation] = useState("");
	const [data, setData] = useState([]);

	const updateLocation = (event) => {
		setLocation(event.target.value);
	};

	const handleSubmit = (event) => {
		axios({
			url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql",
			method: "post",
			data: {
				query:
					`
			{
				search(
					term: "chiropractor",
					location: "` +
					location +
					`",
					limit: 10
				)
				{
					total
					business {
						name
						rating
						url
						photos
					}
				}
			}`,
			},
			headers: {
				Authorization:
					"Bearer DDBsIFAcxOykMan3M23mvTXB7txBcSu84beTI-H6CH1BpoKImHELdByqbGTY81f6mtmAC-ByJaS-4q9XesFCHJfuIQkXpxPz4ZAODW_ZVCAL_CjfipeZEv0mmqAVYHYx",
				"Accept-Language": "en-US",
			},
		}).then((result) => {
			setData(result.data.data.search.business);
		});
	};

	return (
		<div class="">
			<br />
			<div class="">
				<div class="">
					<label htmlFor="">Location to search in</label>
					<input
						type="text"
						class=""
						id="locationInput"
						value={location}
						onChange={updateLocation}
						placeholder="Dallas, TX"
					/>
				</div>
				<button onClick={handleSubmit} class="">
					Submit
				</button>
			</div>
			<br />
			<div class="container">
				{data.map((business) => (
					<div class="">
						<div class="">
							<img href={business.url} src={business.photos[0]} class="" />
						</div>
						<div class="">
							<h2>
								<a href={business.url}> {business.name} </a>
							</h2>
							<p> {business.rating} out of 5 </p>
							<hr class="" />
						</div>
						<br />
					</div>
				))}
			</div>
		</div>
	);
};

export default Search;
