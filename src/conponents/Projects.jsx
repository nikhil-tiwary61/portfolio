import "../styles/Projects.css";
import { projects } from "../../data/data";

export default function Projects() {
  return (
    <section className="blue-background">
      <div id="projects">
        <h2>
          Projects <span className="line"></span>
        </h2>
        <div id="project-grid">
          {projects.map((project, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <img src={project.img} alt="Project Image" />
                </div>
                <div className="card-text">
                  <h3>{project.title}</h3>
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
        </div>
      </div>
    </section>
  );
}
