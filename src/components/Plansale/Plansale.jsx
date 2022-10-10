import React from 'react';
import { plansData, plansdata } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import './Plansale.css';

const Plansale = () => {
	return (
		<div className="Plansale-container">
			<div className="blur plans-blur-1"></div>
			<div className="blur plans-blur-2"></div>
			<div className="programs-header" style={{ gap: '1rem' }}>
				<span className="stroke-text">FACILITA TUS PROCESOS Y </span>
				<span>HAZ CRECER TU GIMNASIO</span>
				<span className="stroke-text">AHORRA TIEMPO </span>
			</div>

			<div className="plans">
				{plansData.map((plan, i) => (
					<div className="plan" kay={i}>
						{plan.icon}
						<span>{plan.name}</span>
						<span>{plan.price}</span>

						<div className="features">
							{plan.features.map((feature, i) => (
								<div className="feature">
									<img src={whiteTick} alt="" />
									<span kay={i}>{feature}</span>
								</div>
							))}
						</div>
						<div>
							<span>Los Beneficios aumentan -></span>
						</div>
						<button className="btn">Unete Ahora!</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Plansale