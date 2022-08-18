import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import { useContext } from "react";
import { TheameContext } from "./Context/TheameContext";

function App() {
  const { isLight } = useContext(TheameContext);
  return (
    <div className={`App is ${isLight ? "light" : "dark"}`}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
