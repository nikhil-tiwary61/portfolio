import "./App.css";
import Navbar from "./conponents/Navbar";
import Home from "./conponents/Home";
import About from "./conponents/About";
import Skills from "./conponents/Skills";
import Projects from "./conponents/Projects";
import ContactForm from "./conponents/ContactForm";
import Footer from "./conponents/Footer";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("darkMode");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
