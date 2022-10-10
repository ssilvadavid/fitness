import React from 'react'
import './Clientes.css'
import c1 from "../../assets/cliente1.jpeg"
import c2 from "../../assets/cliente2.jpeg"
import c3 from "../../assets/cliente3.png"
import c4 from "../../assets/cliente4.png"
import c5 from "../../assets/cliente5.jpeg"
import c6 from "../../assets/cliente6.png"
import c7 from "../../assets/cliente7.jpeg"
import c8 from "../../assets/cliente8.png"

const Clientes = () => {
	return (
		<div className="Join" id="join-us">
			<div className="left-x">
				<hr />
				<div>
					<span >NUESTROS</span>
					<span className="stroke-text"> CLIENTES</span>
				</div>
			</div>
			<div className="right-x">
				<img className='c1' src={c1} alt="" />
				<img className='c1' src={c2} alt="" />
				<img className='c1' src={c3} alt="" />
				<img className='c1' src={c4} alt="" />
				<div>
					<img className='c1' src={c5} alt="" />
					<img className='c1' src={c6} alt="" />
					<img className='c1' src={c7} alt="" />
					<img className='c1' src={c8} alt="" />
				</div>

			</div>
		</div>
	)
}

export default Clientes