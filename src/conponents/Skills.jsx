import "../styles/Skills.css";
import { technologies } from "../../data/data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-heading">Skills</div>
      <br />
      {technologies.map((technology, index) => {
        return (
          <div key={index} className="tech-tile">
            <div>{technology.title}</div>
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
                    <div>{skill.name}</div>
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
