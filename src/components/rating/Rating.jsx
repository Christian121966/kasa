import React from 'react';
import './Rating.scss';
import datas from '../../data/Data';
import starActive from '../../assets/star-active.png';
import starInactive from '../../assets/star-inactive.png';


function Rating({ appId }) {
  const totalStars = 5;
  const apartment = datas.find(data => data.id === appId);
  const rating = apartment ? parseInt(apartment.rating, 10) : 0;

  const stars = [];
  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <img 
        key={i}
        src={i < rating ? starActive : starInactive} 
        alt={i < rating ? 'star-active' : 'star-inactive'} 
        className="star" 
      />
    );
  }

  return <div className="rating-container">{stars}</div>;
}

export default Rating;