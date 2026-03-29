import React from "react";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import NotesGrid from "./NotesGrid.jsx";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Topbar />
        <NotesGrid />
      </div>
    </div>
  );
}

export default Dashboard;