import "../styles/Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="name">
          <Link>Nikhil Tiwary</Link>
        </div>
        <div className="desktop-menu">
          <Link className="desktop-menu-list-items">Home</Link>
          <Link className="desktop-menu-list-items">About</Link>
          <Link className="desktop-menu-list-items">Skills</Link>
          <Link className="desktop-menu-list-items">Projects</Link>
        </div>
        <button>Contact Me</button>
      </nav>
    </>
  );
}
