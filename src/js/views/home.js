import React from "react";
import { Characters } from "./personajes";
import { Vehicles } from "./vehiculos";
import { Planets } from "./planetas";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container">
		<div className="row">
			<Characters />
		</div>
		<div className="row">
			<Vehicles />
		</div>
		<div className="row">
			<Planets />
		</div>
	</div>
);
