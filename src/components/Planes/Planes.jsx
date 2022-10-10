import React from 'react'
import "./Planes.css";
import { programsData } from "../../data/programsData";

import metris from "../../assets/metris.png";


const Planes = () => {
	return (
		<div className="Planes" id="planes">

			<div className="planes-header">
				<span className='stroke-text'>Explora</span>
				<span>Nuestro</span>
				<span className='stroke-text'>Software</span>
			</div>

			<div className="planes-categories">

				{programsData.map((program) => (
					<div className="category">
						{program.image}
						<span>{program.heading}</span>
						<span>{program.details}</span>


						<div>
							<img src={metris} alt="" className='metris-a' />
							<span> Conoce las Metricas </span><span>de tu negocio</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Planes