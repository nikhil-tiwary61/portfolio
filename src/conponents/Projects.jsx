import "../styles/Projects.css";
import { projects } from "../../data/data";

export default function Projects() {
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
