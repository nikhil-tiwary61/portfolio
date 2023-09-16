import "../styles/Projects.css";
import { projects } from "../../data/data";

export default function Projects() {
  return (
    <section id="projects" className="blue-background">
      <h2 className="section-heading">Projects</h2>
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
              <a href={project.demo} target="_blank" rel="noreferrer">
                <button>Demo</button>
              </a>
              <a href={project.code} target="_blank" rel="noreferrer">
                <button>Code</button>
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}
