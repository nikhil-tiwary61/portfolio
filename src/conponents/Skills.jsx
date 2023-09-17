import "../styles/Skills.css";
import { technologies } from "../../data/data";

export default function Skills() {
  return (
    <section id="skills">
      <h2>
        Skills <span className="line"></span>
      </h2>
      {technologies.map((technology, index) => {
        return (
          <div key={index} className="tech-tile">
            <h3>{technology.title}</h3>
            <br />
            <div className="skills-block">
              {technology.skills.map((skill, index) => {
                return (
                  <div className="skill-tile" key={index}>
                    <div className="skill-image-tile">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill"
                      />
                    </div>
                    <h4>{skill.name}</h4>
                  </div>
                );
              })}
            </div>
            <br />
          </div>
        );
      })}
    </section>
  );
}
