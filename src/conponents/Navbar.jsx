import "../styles/Navbar.css";
import { Link } from "react-scroll";
import contactMe from "../assets/contact_me.png";
import light from "../assets/light.png";
import dark from "../assets/dark.png";
import menu from "../assets/menu.png";
import close from "../assets/closeBtn.png";
import { useState } from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  function handleTheme() {
    setTheme(theme === "darkMode" ? "lightMode" : "darkMode");
  }
  return (
    <nav className={theme}>
      <div className="navbar">
        <div className="name">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktop-menu-list-items"
          >
            Nikhil Tiwary
          </Link>
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
            offset={-63}
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
          <button onClick={handleTheme}>
            <img src={theme === "darkMode" ? dark : light} alt="Theme Icon" />
          </button>
        </div>
        <button
          id="contact-btn"
          className={theme}
          onClick={() => {
            document.getElementById("contact-me").scrollIntoView();
          }}
        >
          <img src={contactMe} alt="Contact Me Icon" />
          Contact Me
        </button>

        {/* mobile menu */}
        <img
          src={showMenu ? close : menu}
          alt="Menu"
          className="mob-menu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className={`nav-menu ${theme}`}
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
            offset={-63}
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
          <Link
            activeClass="active"
            to="contact-me"
            spy={true}
            smooth={true}
            offset={-62}
            duration={500}
            className="list-items"
            onClick={() => setShowMenu(false)}
          >
            Contact Me
          </Link>
          <button onClick={handleTheme}>
            <img src={theme === "darkMode" ? dark : light} alt="Theme Icon" />
          </button>
        </div>
      </div>
    </nav>
  );
}
