import React, { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [title, setTitle] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();   // ✅ prevent reload

    if (!title.trim()) return; // optional safety

    onSearch(title);      // ✅ send input to parent
  };

  return (
    <form className="topbar" onSubmit={handleSearch}>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search notes..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit" className="search_btn">
          Search
        </button>
      </div>
    </form>
  );
};

export default Navbar;