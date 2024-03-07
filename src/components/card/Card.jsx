import React from 'react';

function Card({ title, coverImage, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={coverImage} alt={title} />
            <h3>{title}</h3>
            <button>Voir les détails</button>
        </div>
    );
}

export default Card;