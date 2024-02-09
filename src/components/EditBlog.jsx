import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const EditBlog = ({ blogs, setBlogs }) => {
  const { index } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (blogs[index]) {
      setTitle(blogs[index].title);
      setBody(blogs[index].body);
      setAuthor(blogs[index].author);
    }
  }, [blogs, index]);

  const handleSubmite = (e) => {
    e.preventDefault();
    const editedBlog = {
      title: title,
      body: body,
      author: author,
    };
    if (
      editedBlog.title !== "" &&
      editedBlog.body !== "" &&
      editedBlog.author !== ""
    ) {
      const updatedBlogs = [...blogs];
      updatedBlogs[index] = editedBlog;
      setBlogs(updatedBlogs);
      navigate("/");
    }
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
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            ></textarea>
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
          <input type="submit" value="Save changes" className="add" />
        </form>
      </main>
    </>
  );
};

export default EditBlog;
