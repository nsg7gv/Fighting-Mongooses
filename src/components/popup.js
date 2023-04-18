import React from 'react';
import './popup.css';

const Popup = ({ title, children, onClose }) => (
  <div className="popup-overlay" onClick={onClose}>
    <div
      className="popup-content"
      style={{
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
        maxWidth: "500px",
        padding: "20px",
        position: "relative",
        zIndex: "1001",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <h2>{title}</h2>
      <button onClick={onClose}>&times;</button>
      {children}
    </div>
  </div>
);

export default Popup;
