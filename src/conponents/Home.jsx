import "../styles/Home.css";
import { Link } from "react-scroll";
import profilePic from "../assets/profile_pic.png";
import hireMe from "../assets/hire_me.png";

export default function Home() {
  return (
    <>
      <section id="intro">
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
          <Link>
            <button className="btn">
              <img src={hireMe} alt="Hire Me Icon" />
              Hire me
            </button>
          </Link>
        </div>
        <img src={profilePic} alt="Profile Picture" className="bg" />
      </section>
    </>
  );
}
