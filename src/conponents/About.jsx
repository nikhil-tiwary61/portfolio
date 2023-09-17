import "../styles/About.css";
import AboutPic from "../assets/about_pic.png";

export default function About() {
  const about =
    "I'm a full stack developer proficient in both front-end and back-end development, allowing myself to work on all layers of a web application. On the front-end side, I specialize in HTML, CSS, and JavaScript frameworks such as React. While on the back-end side I specialize in Node and its framework Express along with MongoDB as database. My programming journey kickstarted just about a year ago. Eversince then, it has been a journey of constant learning.";
  return (
    <section className="blue-background">
      <div id="about">
        <div className="about-section">
          <h2>
            About Me <span className="line"></span>
          </h2>
          <p>{about}</p>
        </div>
        <img src={AboutPic} alt="About Illustration" />
      </div>
    </section>
  );
}
