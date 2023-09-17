import "../styles/Navbar.css";
import { Link } from "react-scroll";
import contactMe from "../assets/contact_me.png";
import menu from "../assets/menu.png";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
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
            offset={-62}
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
            offset={-62}
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
            offset={-62}
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

        <img
          src={menu}
          alt="Menu"
          className="mob-menu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="nav-menu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="list-items"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-62}
            duration={500}
            className="list-items"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-62}
            duration={500}
            className="list-items"
            onClick={() => setShowMenu(false)}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-62}
            duration={500}
            className="list-items"
            onClick={() => setShowMenu(false)}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
