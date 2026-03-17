import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">SkyView</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/series">Series</Link>
        <Link to="/anime">Anime</Link>
        <Link to="/kids">Kids</Link>
      </div>
    </nav>
  );
};

export default Navbar;