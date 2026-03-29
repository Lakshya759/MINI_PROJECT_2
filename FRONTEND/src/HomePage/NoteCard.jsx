import React from "react";
import "./Dashboard.css"
function NoteCard({ note }) {
  return (
    <div className="card">
      <img src={note.image} alt="" />

      <div className="card-content">
        <p className="pages">{note.pages}</p>
        <h3>{note.title}</h3>
        <div className="meta">
          <span>{note.date}</span>
          <span>{note.size}</span>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;