import React from 'react'
import './Utilidades.css';
import ReactPlayer from 'react-player';
import tick from '../../assets/tick.png'

const Utilidades = () => {
	return (
		<div className="Utilidades" id='utilidades'>
			<div className="left-r">
				<div className="imag" style={{ width: '100%', heigt: '100%', position: 'relative' }}>
					<ReactPlayer
						url={require('../../assets/dtggrupo.mp4')}
						width='100%'
						height='100%'
						controls
					/>
				</div>

				<div className="right-r">

					<div className='details-r'>
						<div>
							<img src={tick} alt=""></img>
							<span>Nuestra plataforma se adapta a cualquier dispositivo</span>
						</div>
						<div><img src={tick} alt="" />
							<span>Permite verificar de manera inmediata tus parametros</span>
						</div>
						<div><img src={tick} alt="" />
							<span>Ahora es mas cómodo y fácil ingresar a tu local</span>
						</div>
						<div><img src={tick} alt="" />
							<span>Estamos donde requieras generar procesos comerciales</span>
						</div>
						<div><img src={tick} alt="" />
							<span>Automatiza tus cobros y ingresos de nuevos  clientes</span>
						</div>
						<div><img src={tick} alt="" />
							<span>Una herramienta intuitiva para su uso</span>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Utilidades