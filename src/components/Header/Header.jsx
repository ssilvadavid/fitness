import React from 'react'
import './Header.css'
import Logo from "../../assets/logo.png"

const Header = () => {
	return (
		<div className="header">

			<img src={Logo} alt="" className='logo' />
			<ul className='header-menu'>
				<li>Home</li>
				<li>Servicios</li>
				<li>Planes</li>
				<li>Academia Fitness</li>
			</ul>


		</div>
	)
}

export default Header

