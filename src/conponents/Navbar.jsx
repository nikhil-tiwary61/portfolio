import "../styles/Navbar.css";
import { Link } from "react-scroll";
import contactMe from "../assets/contact_me.png";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="name">
          <Link>Nikhil Tiwary</Link>
        </div>
        <div className="desktop-menu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktop-menu-list-items"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="desktop-menu-list-items"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="desktop-menu-list-items"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="desktop-menu-list-items"
          >
            Projects
          </Link>
        </div>
        <button id="contact-btn">
          <img src={contactMe} alt="Contact Me Icon" />
          Contact Me
        </button>
      </div>
    </nav>
  );
}
