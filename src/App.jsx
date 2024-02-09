import React, { useState } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Create from "./components/Create";
import EditBlog from "./components/EditBlog";
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
  const handleEdit = (index) => {
    console.log("Editing blog with index:", index);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              blogs={blogs}
              deleteBlog={deleteBlog}
              handleEdit={handleEdit}
            />
          }
        ></Route>
        <Route path="/create" element={<Create addBlog={addBlog} />}></Route>
        <Route
          path="/editblog/:index"
          element={<EditBlog blogs={blogs} setBlogs={setBlogs} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
