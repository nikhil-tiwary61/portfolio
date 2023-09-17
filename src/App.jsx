import "./App.css";
import Navbar from "./conponents/Navbar";
import Home from "./conponents/Home";
import About from "./conponents/About";
import Skills from "./conponents/Skills";
import Projects from "./conponents/Projects";
import ContactForm from "./conponents/ContactForm";
import Footer from "./conponents/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
