import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Create = ({ addBlog }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const [charsLeft, setCharsLeft] = useState(500); // Initial value based on maxLength

  const handleSubmite = (e) => {
    e.preventDefault();
    const newBlog = {
      title: title,
      body: body,
      author: author,
    };
    if (newBlog.title !== "" && newBlog.body !== "" && newBlog.author !== "") {
      addBlog(newBlog);
      navigate("/");

      setTitle("");
      setBody("");
      setAuthor("");
    }
  };

  //calc left chars
  const handleBodyChange = (e) => {
    const inputText = e.target.value;
    setBody(inputText);
    setCharsLeft(500 - inputText.length);
  };

  return (
    <>
      <Navbar />
      <main>
        <form onSubmit={handleSubmite}>
          <label htmlFor="title">Blog title:</label>
          <input
            name="title"
            className="title"
            placeholder="Blog Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="body">Blog content:</label>
          <div className="text-area">
            <textarea
              name="body"
              placeholder="Blog Body..."
              maxLength={500}
              value={body}
              onChange={handleBodyChange}
              required
            ></textarea>
            <span className="left-chars">{charsLeft}</span>
          </div>
          <label htmlFor="author">Blog Author:</label>
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <input type="submit" value="Add blog" className="add" />
        </form>
      </main>
    </>
  );
};

export default Create;
