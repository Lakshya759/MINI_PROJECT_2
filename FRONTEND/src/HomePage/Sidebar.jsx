import React from "react";
import "./Dashboard.css";
import axios from "axios"
const Sidebar = ({setView,fetchNotes,clickUser,user,setFavNote}) => {
  const handleAll=()=>{
    setView("all");
    fetchNotes()
  }
  
  return (
    <>
      <aside className="sidebar">
        <div>
        <div className="logo">
          📘 <span>ShareSphere</span>
        </div>
        <button className="new-note" onClick={() => setView("create")}>+ New Note</button>
        

        <nav className="menu">
          <p className="active" onClick={()=>handleAll()}>🏠 All Notes</p>
          <p onClick={()=>setView("favourite")}>⭐ Favorites</p>
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
        </div>
        <div className="profile" onClick={()=>clickUser()}>
          <div className="avatar">{user?.name?.[0].toUpperCase()}</div>
          <div>
            <p>{user.name}</p>
            <span>{user.email}</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
