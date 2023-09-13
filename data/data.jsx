import dummyImage from "../src/assets/about_pic.avif";
import HTML5 from "../src/assets/skills/HTML5.png";
import CSS3 from "../src/assets/skills/CSS3.png";
import JAVASCRIPT from "../src/assets/skills/JAVASCRIPT.png";
import REACT from "../src/assets/skills/REACT.png";
import REDUX from "../src/assets/skills/REDUX.png";
import NODE from "../src/assets/skills/NODE.png";
import EXPRESS from "../src/assets/skills/EXPRESS.png";
import MONGODB from "../src/assets/skills/MONGODB.png";
import MONGOOSE from "../src/assets/skills/MONGOOSE.png";
import GIT from "../src/assets/skills/GIT.png";
import GITHUB from "../src/assets/skills/GITHUB.png";

export const technologies = [
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

export const projects = [
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
