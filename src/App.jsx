import React, { useState } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Create from "./components/Create";
//Import components

function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs((prevBlogs) => [...prevBlogs, blog]);
  };
  const deleteBlog = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home blogs={blogs} deleteBlog={deleteBlog} />}
        ></Route>
        <Route path="/create" element={<Create addBlog={addBlog} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
