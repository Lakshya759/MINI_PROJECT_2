import React, { useState } from 'react'
import axios from "axios"
const Navbar = ({setNotes}) => {
  const [title,setTitle]=useState("")
  const onSearch = async (e) => {
    e.preventDefault(); // 
console.log("res");
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/file/search?title=${title}`,
        {
          withCredentials: true,
        }

      );
      console.log(res);

      if (res) {
        setNotes(res.data.data); 
      } else {
        console.log("No notes found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="topbar"  onSubmit={onSearch}>
      <div className='searchBar'>
      <input type="text" placeholder="Search notes..." value={title}  onChange={(e) => setTitle(e.target.value)}/>
          <button type="submit" className='search_btn'>Search</button>
      </div>
          
    </form>
  )
}

export default Navbar