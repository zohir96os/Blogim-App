import Navbar from "./Navbar";
import Bloglist from "./Bloglist";

const Home = ({ blogs, deleteBlog }) => {
  return (
    <>
      <Navbar />
      <Bloglist blogs={blogs} deleteBlog={deleteBlog} />
    </>
  );
};

export default Home;
