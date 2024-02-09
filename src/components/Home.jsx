import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Bloglist from "./Bloglist";

const Home = ({ blogs, deleteBlog, handleEdit }) => {
  const navigate = useNavigate();

  const editBlog = (index) => {
    navigate(`/editblog/${index}`);
  };
  return (
    <>
      <Navbar />
      <Bloglist blogs={blogs} deleteBlog={deleteBlog} handleEdit={editBlog} />
    </>
  );
};

export default Home;
