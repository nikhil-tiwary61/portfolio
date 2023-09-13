import HTML5 from "../assets/skills/HTML5.PNG";
import CSS3 from "../assets/skills/CSS3.PNG";
import JAVASCRIPT from "../assets/skills/JAVASCRIPT.PNG";
import REACT from "../assets/skills/REACT.PNG";
import REDUX from "../assets/skills/REDUX.PNG";
import NODE from "../assets/skills/NODE.PNG";
import EXPRESS from "../assets/skills/EXPRESS.PNG";
import MONGODB from "../assets/skills/MONGODB.PNG";
import MONGOOSE from "../assets/skills/MONGOOSE.PNG";
import GIT from "../assets/skills/GIT.PNG";
import GITHUB from "../assets/skills/GITHUB.PNG";

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
    <section>
      <div>Skills</div>
      {technologies.map((technology, index) => {
        return (
          <div key={index} className="tech-tile">
            <div>{technology.title}</div>
            <div>
              {technology.skills.map((skill, index) => {
                return (
                  <div key={index}>
                    <img src={skill.icon} alt={skill.name} />
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
