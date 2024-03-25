import React, { useEffect, useState } from 'react';
import './Rating.scss';
import datas from '../../data/Data';
import starActive from '../../assets/star-active.png';
import starInactive from '../../assets/star-inactive.png';

// Fonction pour générer une clé unique
const generateUniqueKey = () => {
  return Math.random().toString(36).substring(7);
};

function Rating({ appId }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const stringAppId = String(appId).trim();
    const foundApartment = datas.find(data => String(data.id) === stringAppId);

    if (foundApartment && foundApartment.rating) {
      const numericRating = Math.max(0, Math.min(5, parseInt(foundApartment.rating, 10)));
      setRating(numericRating);
    } else {
      setRating(0);
    }
  }, [appId]);

  return (
    <div className="rating-container">
      {[...Array(5)].map((_, i) => (
        <img
          key={`star-${generateUniqueKey()}`} // Utilisation de la fonction pour générer une clé unique
          src={i < rating ? starActive : starInactive}
          alt={i < rating ? 'Étoile active' : 'Étoile inactive'}
          className="star"
        />
      ))}
    </div>
  );
}


export default Rating;
