import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.listaPlanets();
	}, []);

	return (
		<div className="container">
			<h1>Planetas</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.planetList.map((item, index) => {
					const dataPlanet = [
						{
							label: "Terreno",
							value: item.terrain
						},
						{
							label: "Poblacion",
							value: item.population
						}
					];
					let linkUrl = index + 1;
					return (
						<Card
							key={index}
							url="https://reviewsyouread.files.wordpress.com/2021/03/10-more-star-wars-planets-as-countries.png"
							title={item.name}
							link={"https://swapi.dev/api/planets/" + linkUrl}
							contenido={dataPlanet}
						/>
					);
				})}
			</div>
		</div>
	);
};
