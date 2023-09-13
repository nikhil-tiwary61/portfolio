import "../styles/About.css";
import AboutPic from "../assets/about_pic.avif";

export default function About() {
  return (
    <section id="about">
      <div>About</div>
      <div>
        I'm a full stack developer proficient in both front-end and back-end
        development, allowing them to work on all layers of a web application.
        On the front-end side, I specialize in HTML, CSS, and JavaScript
        frameworks such as React. While on the back-end side I specialize in
        Node and its framework Express along with MongoDB as database. My
        programming journey kickstarted when learning to make a simple HTML
        website on Window's notepad program. The Odin Project's Full Stack
        JavaScript Curriculum is just one of the ways I'm learning to code now.
        Besides coding, I like to read books and play video games.
      </div>
      <img src={AboutPic} alt="About Illustration" />
    </section>
  );
}
