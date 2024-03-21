import './footer.scss';
import logoFooter from '../../assets/LogFooter.png';
import allRigths from '../../assets/allRigths.png';

function Footer() {
    return (
      <div className='footer'>
        <img src={logoFooter} alt="logoFooter" className='logoFooter'/>
        <img src={allRigths} alt="Mentions légales" className='mentions'/>
      </div>
    )
  }
  
  export default Footer;