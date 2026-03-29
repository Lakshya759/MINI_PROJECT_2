import React from "react";
import "./Dashboard.css"
function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">NotesHub</h2>

      <button className="new-btn">+ New Note</button>

      <div className="menu">
        <p>All Notes</p>
        <p>Favorites</p>
        <p>Shared with me</p>
        <p>Trash</p>
      </div>

      <div className="folders">
        <h4>FOLDERS</h4>
        <p>Personal</p>
        <p>Work</p>
        <p>Projects</p>
        <p>Research</p>
      </div>

      <div className="profile">
        <p>John Doe</p>
        <span>john@example.com</span>
      </div>
    </div>
  );
}

export default Sidebar;