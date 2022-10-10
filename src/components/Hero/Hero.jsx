import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import grupo from "../../assets/grupo.png";
import { motion } from 'framer-motion'


const Hero = () => {
	const transition = { type: 'spring', duration: 15 };
	return (
		<div className="hero">
			<div className="blur hero-blur"></div>
			<div className="left-h">
				<Header />

				<div className="the-best-ad">
					<motion.div
						initial={{ left: '480px' }}
						whileInView={{ left: '40px' }}
						transition={{ ...transition, type: 'tween' }}
					></motion.div>
					<div></div>
					<span>Plataforma de gestión para gimnasios y centros deportivos</span>
				</div>

				<div className="hero-text">
					<div>
						<span className='stroke-text'>Potencia </span>
						<span>Tus</span>
					</div>
					<div>
						<span>Instalaciones</span>
					</div>
					<div>
						<span>
							Somos el software que necesitas para aumentar el crecimiento de tu gimnasio o centro deportivo.
						</span>
					</div>
				</div>
				<div className="figures">
					<div>
						<span>+ de 100.000</span>
						<span>USUARIOS</span>
					</div>
					<div>
						<span>+ de 10 años</span>
						<span>DE EXPERIENCIA</span>
					</div>
					<div>
						<span>+ de 156K</span>
						<span>PROCESADOS POR NOSOTROS</span>
					</div>
				</div>

				<div className="hero-buttons">
					<buttons className="btn">Unete Ahora!</buttons>
					<buttons className="btn">Saber Mas</buttons>
				</div>
			</div>
			<div className="right-h">
				<button className="btn">Unete Ahora!</button>

				<div className="grupo-a">
					<img src={grupo} alt="" className='grupo' />
					<span>Grupo DTG</span>
				</div>
				<img src={hero_image} alt="" className="hero-image" />
				<motion.img
					initial={{ right: '11rem' }}
					whileInView={{ right: '20rem' }}
					transition={transition}
					src={hero_image_back} alt="" className="hero-image-back" />

			</div>
		</div >
	)
}

export default Hero