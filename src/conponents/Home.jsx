import "../styles/Home.css";
import { Link } from "react-scroll";
import profilePic from "../assets/profile_pic.png";
import hireMe from "../assets/hire_me.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section className={theme}>
        <div id="intro">
          <div className="intro-content">
            <span className="hello">Hello,</span>
            <span className="intro-text">
              I&apos;m <span className="intro-name">Nikhil</span>
              <br />
              Web Developer
            </span>
            <p className="intro-para">
              I am a skilled web developer with expertise <br /> in React JS and
              interest in Front End Development.
            </p>
            <Link
              activeClass="active"
              to="contact-me"
              spy={true}
              smooth={true}
              offset={-62}
              duration={500}
            >
              <button className={`btn ${theme}`}>
                <img src={hireMe} alt="Hire Me Icon" />
                Hire me
              </button>
            </Link>
            <div className="links">
              <a
                href="https://www.linkedin.com/in/nikhil-tiwary/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="Go to LinkedIn" />
              </a>
              <a
                href="https://github.com/nikhil-tiwary61"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="Go to Github" />
              </a>
              <a href="mailto:ntiwary61@gmail.com">
                <img src={gmail} alt="Mail to ntiwary61@gmail.com" />
              </a>
            </div>
          </div>
          <img src={profilePic} alt="Profile Picture" className="bg" />
        </div>
      </section>
    </>
  );
}
