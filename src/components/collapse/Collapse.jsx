import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Collapse.scss';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour rendre le contenu en fonction de son type
  const renderContent = () => {
    if (Array.isArray(content)) {
      return <ul>{content.map((item, index) => <li key={index}>{item}</li>)}</ul>;
    }
    // Si content n'est pas un tableau, on l'affiche directement
    return <p>{content}</p>;
  };

  return (
    <div className={`collapse-container ${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className={`collapse ${isOpen ? "collapse-content" : "collapse-content-hidden"}`}>
        <h3 className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
          {title}
          <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className='arrow' />
        </h3>
        {isOpen && (
          <div className={isOpen ? "collapse-content" : "collapse-content-hidden"}>
            {renderContent()}
          </div>
        )}
      </div>
    </div>
  );
}

export default Collapse;