import "../styles/Projects.css";
import dummyImage from "../assets/about_pic.avif";

export default function Projects() {
  return (
    <section id="projects">
      <div>Projects</div>
      <div className="card">
        <div className="card-img">
          <img src={dummyImage} alt="Project Image" />
        </div>
        <div className="card-text">
          <h2>Project Title</h2>
          <p>Project description</p>
          <br />
          <p>Made with:</p>
          <p>Aug 2023</p>
        </div>
        <div className="card-btn">
          <button>Demo</button>
          <button>Code</button>
        </div>
      </div>
    </section>
  );
}
