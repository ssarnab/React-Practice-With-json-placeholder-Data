import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-3 bg-light">
        <nav>
        <Link to="/">Home</Link> |
        <Link to="posts"> Posts</Link> |
        <Link to="dashboard"> Dashboard</Link>
      </nav>
    </div>
  );
};

export default Navbar;
