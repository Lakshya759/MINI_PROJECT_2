import React from "react";
import "./Dashboard.css";
const Sidebar = ({setView,fetchNotes,clickUser}) => {
  const handleAll=()=>{
    setView("all");
    fetchNotes()
  }
  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          📘 <span>NotesHub</span>
        </div>
        <button className="new-note" onClick={() => setView("create")}>+ New Note</button>
        

        <nav className="menu">
          <p className="active" onClick={()=>handleAll()}>🏠 All Notes</p>
          <p>⭐ Favorites</p>
          <p>👥 Shared with me</p>
          <p>🗑 Trash</p>
        </nav>

        {/* <div className="folders">
          <div className="folder-title">
            FOLDERS <span>+</span>
          </div>

          <p>
            📁 Personal <span>12</span>
          </p>
          <p>
            📁 Work <span>24</span>
          </p>
          <p>
            📁 Projects <span>8</span>
          </p>
          <p>
            📁 Research <span>15</span>
          </p>
        </div> */}

        <div className="profile" onClick={()=>clickUser()}>
          <div className="avatar">JD</div>
          <div>
            <p>John Doe</p>
            <span>john@example.com</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
