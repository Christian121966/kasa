import React from 'react';
import './banner.scss';
import bannerImage from '../../assets/ImageSource2.svg';

function Banner({ isVisible = true, showimage = false }) {
  return (
    <>
      <section className={showimage ? 'banner-about' : 'banner-accueil'}>
        {!showimage && isVisible && <h2>Chez vous, partout et ailleurs</h2>}
        {showimage && isVisible && <img src={bannerImage} alt="Belle vue sur la mer" />}
      </section>
    </>
  );
}

export default Banner;

