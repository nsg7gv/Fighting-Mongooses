import React from 'react';
import './popup.css';

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{props.title}</h2>
        <div className="popup-content">
          {props.children}
        </div>
        <button className="close-btn" onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;