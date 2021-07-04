import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.listaVehicles();
	}, []);

	return (
		<div className="container">
			<h1>Vehiculos</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.vehicleList.map((item, index) => {
					const dataVehicle = [
						{
							label: "Model",
							value: item.model
						},
						{
							label: "Class",
							value: item.vehicle_class
						}
					];
					let linkUrl = index + 1;
					return (
						<Card
							key={index}
							url="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480x272/public/media/image/2017/11/halcon-milenario.jpg?itok=HtQ2p4m-"
							title={item.name}
							link={"https://swapi.dev/api/vehicles/" + linkUrl}
							contenido={dataVehicle}
						/>
					);
				})}
			</div>
		</div>
	);
};
