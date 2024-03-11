import React from 'react';
import './Accueil.scss'
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';


function Accueil() {
	return (
		<div className='accueil'>
			<Header />
			<Banner isVisible={true} showimage={false} />
			<Gallery />
			<Footer />
		</div>
	);
}
export default Accueil;