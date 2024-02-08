// Bloglist.js
import React from "react";

const Bloglist = ({ blogs, deleteBlog }) => {
  if (!blogs || blogs.length === 0) {
    return (
      <div className=" empty">
        <p className="empty-blogs">No blogs available</p>
        <span className="info">To get started create new blog.</span>
      </div>
    );
  }

  const handleDelete = (index) => {
    deleteBlog(index);
  };
  return (
    <div>
      <div className="container">
        <h1 className="blogs-header">All Blogs</h1>
        {blogs.map((blog, index) => (
          <div key={index} id={index} className="blog-box">
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-body">{blog.body}</p>
              <h4 className="blog-author">{blog.author}</h4>
            </div>
            <button className="delete" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bloglist;
