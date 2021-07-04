import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.listaCharacters();
	}, []);

	return (
		<div className="container">
			<h1>Personajes</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.peopleList.map((item, index) => {
					const dataPerson = [
						{
							label: "Gender",
							value: item.gender
						},
						{
							label: "Hair",
							value: item.hair_color
						},
						{
							label: "Eyes",
							value: item.eye_color
						}
					];
					let linkUrl = index + 1;
					return (
						<Card
							key={index}
							url="https://elcomercio.pe/resizer/CCzKYeli5rmsCSECl_r9VfrE8s4=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/7IN5YML5RRFNBKOV2T3UVJ6VLI.jpg"
							title={item.name}
							link={"https://swapi.dev/api/people/" + linkUrl}
							contenido={dataPerson}
						/>
					);
				})}
			</div>
		</div>
	);
};
