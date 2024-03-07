import React from 'react';
import datas from '../../data/data';

function Gallery() {
  return (
    <div>
      {datas ? (
        datas.map((data) => (
          <div key={data.id}>
            <img src={data.cover} alt={data.title} />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>Rating: {data.rating}</p>
            <p>Location: {data.location}</p>
            <ul>
              {data.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
            <ul>
              {data.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Gallery;