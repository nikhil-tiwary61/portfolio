import dummyImage from "../src/assets/about_pic.avif";
import HTML5 from "../src/assets/skills/HTML5.png";
import CSS3 from "../src/assets/skills/CSS3.png";
import JAVASCRIPT from "../src/assets/skills/JAVASCRIPT.png";
import REACT from "../src/assets/skills/REACT.png";
import REDUX from "../src/assets/skills/REDUX.png";
import REACTROUTER from "../src/assets/skills/REACT-ROUTER.png";
import NODE from "../src/assets/skills/NODE.png";
import EXPRESS from "../src/assets/skills/EXPRESS.png";
import MONGODB from "../src/assets/skills/MONGODB.png";
import MONGOOSE from "../src/assets/skills/MONGOOSE.png";
import FIREBASE from "../src/assets/skills/FIREBASE.png";
import GIT from "../src/assets/skills/GIT.png";
import GITHUB from "../src/assets/skills/GITHUB.png";

import ECOMMERCE from "../src/assets/projectPreviews/ECOMMERCE.jpeg";

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
      { name: "FIREBASE", icon: FIREBASE },
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
    title: "E-commerce App",
    desc: "Features: Add to cart, Search bar, Filter by category",
    tech: [REACT, REACTROUTER],
    img: ECOMMERCE,
    date: "August 2023",
    demo: "https://shopping-cart-neon-psi.vercel.app/",
    code: "https://github.com/nikhil-tiwary61/shopping-cart",
  },
  {
    title: "CV Builder",
    desc: "Features: Build resume, Print the resume",
    tech: [REACT],
    img: dummyImage,
    date: "August 2023",
    demo: "https://cv-builder-theta-ecru.vercel.app/",
    code: "https://github.com/nikhil-tiwary61/cv-builder",
  },
  {
    title: "Gossip - Real time chat app",
    desc: "Features: Google Sign In",
    tech: [REACT, FIREBASE],
    img: dummyImage,
    date: "August 2023",
    demo: "https://gossip-kappa.vercel.app/",
    code: "https://github.com/nikhil-tiwary61/gossip",
  },
  {
    title: "Tic-Tac-Toe",
    desc: "Collaborated with the back-end team to make the front-end for the project",
    tech: [JAVASCRIPT, HTML5, CSS3],
    img: dummyImage,
    date: "May 2023",
    demo: "https://nikhil-tiwary61.github.io/odin-tic-tac-toe/",
    code: "https://github.com/nikhil-tiwary61/odin-tic-tac-toe",
  },
  {
    title: "Calculator",
    desc: "A calculator app for basic mathematical operations",
    tech: [JAVASCRIPT, HTML5, CSS3],
    img: dummyImage,
    date: "June 2023",
    demo: "https://nikhil-tiwary61.github.io/calculator/",
    code: "https://github.com/nikhil-tiwary61/calculator",
  },
  {
    title: "Rock-Paper-Scissor",
    desc: "Popular rock-paper-scissor game, best of 5",
    tech: [JAVASCRIPT, HTML5, CSS3],
    img: dummyImage,
    date: "March 2023",
    demo: "https://nikhil-tiwary61.github.io/rock-paper-scissors/",
    code: "https://github.com/nikhil-tiwary61/rock-paper-scissors",
  },
];
