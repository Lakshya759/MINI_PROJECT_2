import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar.jsx";
import NoteCard from "./NoteCard.jsx";
import Navbar from "./Navbar.jsx";
import CreateNote from "./CreateNote.jsx";
import DetailCard from "./DetailCard.jsx";
import Account from "./Account.jsx";
import axios from "axios";
const Dashboard = () => {
  const [note, setNote] = useState([]);
  const [view, setView] = useState("all");
  const [selectedNote, setSelectedNote] = useState(null);
  const [account,setAccount]=useState(false);
  const clickUser=()=>{
    setAccount(true);
  }
  const handleCardClick = (note) => {
    setSelectedNote(note); // open modal
  };
  

  const closeModal = () => {
    setSelectedNote(null); // close modal
  };
  const fetchNotes = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/file`);
      if (res) {
        setNote(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // fetchNotes()
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="containers">
      {/* SIDEBAR */}
      <Sidebar setView={setView} fetchNotes={fetchNotes} clickUser={clickUser}/>

      {/* MAIN */}
      <main className="main">
        {/* TOPBAR */}
        <Navbar setNotes={setNote}/>

        {/* CONTENT */}
        <div className="content">
          {view === "all" && (
            <>
              <h1>All Notes</h1>
              <p className="sub">{note.length} notes</p>

              <div className="grid">
                {note.map((item) => (
                  <NoteCard key={item._id} data={item} onClick={() => handleCardClick(item)} />
                ))}
              </div>
              {selectedNote && (
                <DetailCard note={selectedNote} onClose={closeModal} />
              )}
              {account && <Account onClose={() => setAccount(false)} />}
              
            </>
          )}

          {view === "create" && <CreateNote />}
        </div>
        
      </main>
    </div>
  );
};

export default Dashboard;
