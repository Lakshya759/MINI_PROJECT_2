import React, { useState } from "react";
import "./CreateNote.css";
import axios from "axios";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]); // array
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [loading,setLoading]=useState(false);

  const tagOptions = ["Study", "Meeting", "Work", "Personal"];

  const handleTagClick = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((t) => t !== tag)); // remove
    } else {
      setTags([...tags, tag]); // add
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("subject", subject);
      formData.append("description", description);
      formData.append("file", file);

      // tags array → string
      formData.append("tags", tags.join(","));
      console.log(formData);

      const res = await axios.post(
        "http://localhost:8000/api/v1/file/upload",
        formData,
        {
          withCredentials: true,
        },
      );

      console.log("Success:", res.data);
    } catch (error) {
      console.log("Error:", error);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="create-note">
      <h1>Create Note</h1>

      <form className="form" onSubmit={handleSubmit}>
        {/* TITLE */}
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* SUBJECT */}
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        {/* DESCRIPTION */}
        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* TAGS (MULTI SELECT) */}
        <div className="form-group">
          <label>Tags</label>

          <div className="tag-options">
            {tagOptions.map((tag, index) => (
              <div
                key={index}
                className={`tag-chip ${tags.includes(tag) ? "active" : ""}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* FILE */}
        <div className="form-group">
          <label>Upload File</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>

        <button type="submit" className={"create-btn"} disabled={loading}>
          {loading ? "Submitting..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
