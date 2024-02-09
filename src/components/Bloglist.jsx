import React from "react";

const Bloglist = ({ blogs, deleteBlog, handleEdit }) => {
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
            <div className="blog-buttons">
              <button className="delete" onClick={() => handleDelete(index)}>
                Delete
              </button>
              <button className="delete" onClick={() => handleEdit(index)}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bloglist;
