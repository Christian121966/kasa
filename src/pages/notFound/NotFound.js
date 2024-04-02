import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './NotFound.scss';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
    <Header />
    <div className='NotFound'>
      <h1 className='error'>
        404
      </h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      <h5 className="retour">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </h5>
    </div>
    <Footer />
    </>
  );
}
export default NotFound;