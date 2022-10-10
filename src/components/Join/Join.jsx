import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {

	const form = useRef()
	// const sendEmail = (e) => {
	// 	e.preventDefault();

	// 	emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', from.current,
	// 		'YOUR_USER_ID')
	// 		.then((result) => {
	// 			console.log(result.text);
	// 		}, (error) => {
	// 			console.log(error.text);
	// 		});
	// };

	return (
		<div className="Join" id="join-us">
			<div className="left-j">
				<hr />
				<div>
					<span >LISTO PARA SUBIR </span>
					<span className="stroke-text"> EL NIVEL</span>
				</div>
				<div>
					<span className="stroke-text">DE TUS </span>
					<span> INSTALACIONES ?</span>
				</div>
			</div>
			<div className="right-j">

				<form ref={form} className="email-container" /*onSubmit={sendEmail}*/>
					<input type="email" name="usaer_email" placeholder="Enter your Email address" />
					<button className="btn btn-j">Join Now</button>
				</form>
			</div>
		</div>
	)
}

export default Join