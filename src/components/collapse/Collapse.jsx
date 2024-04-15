import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import TextCollapse from '../atoms/textCollapse';
import './Collapse.scss';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-container">
      <div className="collapse">
        <h3 className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
          {title}
          <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className={`arrow ${isOpen ? 'rotate' : ''}`} />
        </h3>
        {isOpen && (
            <TextCollapse text={content}/>
        )}
      </div>
    </div>
  );
}


export default Collapse;