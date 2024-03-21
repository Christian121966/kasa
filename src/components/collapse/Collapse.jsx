import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Collapse.scss';


function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(false);

    return (

      <div className="collapse-container">
        <div className="collapse">
          <h3 className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
            {title}
            <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className='arrow' />
          </h3>
            {isOpen && (
          <div className={isOpen ? "collapse-content" : "collapse-content-hidden"}>
            {Array.isArray(content) ? content.map((item, index) => (
               <p key={index}>{item}</p>
               )) : <p>{content}</p>}
          </div>
        )}
        </div>
      </div>
    )
  }
  
  export default Collapse;