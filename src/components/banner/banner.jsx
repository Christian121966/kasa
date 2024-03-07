

import './Banner.scss';

function Banner({isVisible = true, showimage = false}) {
    return (
      <>
      <section className={showimage ? 'banner-about' : 'banner-accueil'}>
        {!showimage && isVisible && <h2>Chez vous, partout et ailleurs</h2>}
        {showimage && isVisible && <img src={require('../../assets/Image source 2 (1).svg').default} alt="Belle vue sur la mer" />}
      </section>
      </>
  )
}
  
  export default Banner;