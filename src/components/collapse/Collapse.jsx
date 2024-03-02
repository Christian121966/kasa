import React, { useState } from 'react';
import './Collapse.scss';
import arrow from '../../assets/arrow.png';
//import { useState } from 'react';

function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="collapse-container">
        <button className="collapse-title" onClick={toggleCollapse}>
          {title}
          <img 
                        className={isOpen ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
        </button>
        {isOpen && (
          <div className="collapse-content">
            {Array.isArray(content) ? content.map((item, index) => (
              <p key={index}>{item}</p>
            )) : <p>{content}</p>}
          </div>
        )}
      </div>
    )
  }
  
  export default Collapse;