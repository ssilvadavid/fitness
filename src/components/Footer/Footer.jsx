import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import Php from "../../assets/php.png";
import Sql from "../../assets/sql.png";
import Bit from "../../assets/Bitbucket.png";

const Footer = () => {
	return (
		<div className="Footer-container">
			<hr />
			<div className="footer">
				<div className="social-links">
					<img src={Github} alt="" />
					<img src={Instagram} alt="" />
					<img src={LinkedIn} alt="" />
					<div className="Repositorio">
						<img src={Php} alt="" />
						<img src={Sql} alt="" />
						<img src={Bit} alt="" />
					</div>
				</div>

				<div className="logo-f">
					<img src={Logo} alt="" />
				</div>

			</div>
			<div className="blur blur-f"></div>
			<div className="blur blur-g"></div>
		</div>
	)
}

export default Footer