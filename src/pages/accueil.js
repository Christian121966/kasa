import React from "react";
import './Accueil.scss'
import Header from '../components/header';
import Banner from '../components/banner';
import Gallery from '../components/gallery';
import Footer from '../components/footer';

function accueil() {
	return (
		<div className='accueil'>
			<Header />
			<Banner />
			<Gallery />
			<Footer />
		</div>
	)
}
export default accueil;