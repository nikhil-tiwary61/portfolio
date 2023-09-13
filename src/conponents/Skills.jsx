import "../styles/Skills.css";
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

export default function Skills() {
  const technologies = [
    {
      title: "Front-end",
      skills: [
        { name: "HTML5", icon: HTML5 },
        { name: "CSS3", icon: CSS3 },
        { name: "JAVASCRIPT", icon: JAVASCRIPT },
        { name: "REACT", icon: REACT },
        { name: "REDUX", icon: REDUX },
      ],
    },
    {
      title: "Back-end",
      skills: [
        { name: "NODE", icon: NODE },
        { name: "EXPRESS", icon: EXPRESS },
        { name: "MONGODB", icon: MONGODB },
        { name: "MONGOOSE", icon: MONGOOSE },
      ],
    },
    {
      title: "Miscellaneous",
      skills: [
        { name: "GIT", icon: GIT },
        { name: "GITHUB", icon: GITHUB },
      ],
    },
  ];
  return (
    <section id="skills">
      <h2>Skills</h2>
      {technologies.map((technology, index) => {
        return (
          <div key={index} className="tech-tile">
            <div>{technology.title}</div>
            <div className="skills-block">
              {technology.skills.map((skill, index) => {
                return (
                  <div key={index} className="skill-tile">
                    <img src={skill.icon} alt={skill.name} className="skill" />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
