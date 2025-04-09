import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";  // Assuming this file contains user data

const projects = [
  {
    id: 1,
    name: "Project One",
    description: "A cool web app.",
    technologies: ["React", "Node", "CSS"]
  },
  {
    id: 2,
    name: "Project Two",
    description: "Another awesome project.",
    technologies: ["Vue", "JavaScript", "SASS"]
  },
  {
    id: 3,
    name: "Project Three",
    description: "Yet another amazing project.",
    technologies: ["Angular", "TypeScript", "HTML"]
  }
];

function App() {
  return (
    <div>
      <NavBar />
      <Home 
        name={user.name} 
        city={user.city} 
        color={user.color} 
      />
      <About 
        bio={user.bio} 
        github={user.links.github} 
        linkedin={user.links.linkedin} 
      />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;

