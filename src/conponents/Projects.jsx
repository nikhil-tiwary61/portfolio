import "../styles/Projects.css";
import dummyImage from "../assets/about_pic.avif";
import HTML5 from "../assets/skills/HTML5.png";
import CSS3 from "../assets/skills/CSS3.png";
import JAVASCRIPT from "../assets/skills/JAVASCRIPT.png";
import REACT from "../assets/skills/REACT.png";
import REDUX from "../assets/skills/REDUX.png";
import NODE from "../assets/skills/NODE.png";
import EXPRESS from "../assets/skills/EXPRESS.png";
import MONGODB from "../assets/skills/MONGODB.png";
import MONGOOSE from "../assets/skills/MONGOOSE.png";
import GIT from "../assets/skills/GIT.png";
import GITHUB from "../assets/skills/GITHUB.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      img: dummyImage,
      title: "Project Title",
      desc: "This is the description for the project",
      tech: [
        HTML5,
        CSS3,
        JAVASCRIPT,
        REACT,
        REDUX,
        NODE,
        EXPRESS,
        MONGODB,
        MONGOOSE,
        GIT,
        GITHUB,
      ],
      date: "Aug 2023",
    },
  ];
  return (
    <section id="projects">
      <div>Projects</div>
      {projects.map((project, index) => {
        return (
          <div className="card" key={index}>
            <div className="card-img">
              <img src={project.img} alt="Project Image" />
            </div>
            <div className="card-text">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <br />
              <p>
                <span id="tech-used">Made with:</span>{" "}
                {project.tech.map((technology, index) => (
                  <img
                    key={index}
                    src={technology}
                    alt={technology}
                    className="tech-icons"
                  />
                ))}
              </p>
              <br />
              <p>{project.date}</p>
            </div>
            <div className="card-btn">
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
