import React from "react";
import NoteCard from "./NoteCard";
import "./Dashboard.css"
const notes = [
  {
    title: "Project Meeting Notes",
    date: "Mar 28, 2026",
    size: "2.3 MB",
    pages: "5 pages",
    image: "https://picsum.photos/300/200?1",
  },
  {
    title: "Research Notes - AI",
    date: "Mar 27, 2026",
    size: "4.1 MB",
    pages: "12 pages",
    image: "https://picsum.photos/300/200?2",
  },
  {
    title: "Study Guide - Math",
    date: "Mar 25, 2026",
    size: "1.8 MB",
    pages: "8 pages",
    image: "https://picsum.photos/300/200?3",
  },
];

function NotesGrid() {
  return (
    <div className="notes-section">
      <h1>All Notes</h1>
      <p className="sub">6 notes</p>

      <div className="grid">
        {notes.map((note, index) => (
          <NoteCard key={index} note={note} />
        ))}
      </div>
    </div>
  );
}

export default NotesGrid;