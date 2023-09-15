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
import REACTROUTER from "../src/assets/skills/REACT-ROUTER.png";

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
    img: dummyImage,
    title: "E-commerce App",
    desc: "Features: Add to cart, Search bar, Filter by category",
    tech: [REACT, REACTROUTER],
    date: "Aug 2023",
    demo: "https://shopping-cart-neon-psi.vercel.app/",
    code: "https://github.com/nikhil-tiwary61/shopping-cart",
  },
];
