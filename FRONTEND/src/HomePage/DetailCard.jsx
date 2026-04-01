import React from "react";
import "./DetailCard.css";
import { Link } from 'react-router-dom'
const DetailCard = ({note,onClose}) => {
    function formatDate(isoDate) {
    const date = new Date(isoDate);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-container">

        {/* LEFT SIDE */}
        <div className="modal-left">
          <div className="preview-box">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
              alt="preview"
              className="preview-image"
            />
          </div>

          <div className="action-buttons">
            <a href={note.fileUrl} className="btn primary" target="_blank" >Download</a>
            
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="modal-right">
          <div className="header">
            <h2>{note.title}</h2>
            <span className="close-btn" onClick={onClose}>×</span>
          </div>

          <div className="icon-actions">
            <p>{note.description}</p>
          </div>

          <div className="section">
            <h4>DOCUMENT INFO</h4>

            

            <div className="info-row">
              <span>Size:</span>
              <span>{(note.fileSize/(1024*1024)).toFixed(2)} MB</span>
            </div>

            

            <div className="info-row">
              <span>Created:</span>
              <span>{formatDate(note.createdAt)}</span>
            </div>

            <div className="info-row">
              <span>Owner:</span>
              <span>{note.uploadedBy.name}</span>
            </div>
            <div className="info-row">
              <span>Download Count</span>
              <span>{note.downloadCount}</span>
            </div>
          </div>

          <div className="section">
            <h4>TAGS</h4>
            <div className="tags">
              <span className="tag">Work</span>
              <span className="tag">Meetings</span>
            </div>
          </div>

          <div className="section">
            <h4>DOWNLOADS</h4>
            <div className="sharing-box">
              <span className="dot"></span>
              {`Downloaded by ${note.downloadCount} people`}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailCard;