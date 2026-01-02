import "./styles/Projects.css";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import projects from "../config/projects/Projects";

function Projects() {
  const [showproj, setShowproj] = useState("nothing");

  const display_web = () => {
    setShowproj("display-web");
  };
  const display_ML = () => {
    setShowproj("display-ml");
  };
  const display_others = () => {
    setShowproj("display-others");
  };
  const display_all = () => {
    setShowproj("");
  };

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div id="projects" className="container-fluid">
      <h2 className="topic-head">Projects</h2>
      <div className="d-flex mb-3 ms-2">
        <div className="p-1 sorters  nav-effect" onClick={display_all}>
          All
        </div>
        <div className="p-1 sorters  nav-effect" onClick={display_web}>
          Web
        </div>
        <div className="p-1 sorters  nav-effect" onClick={display_ML}>
          Machine Learning
        </div>
        <div className="p-1 sorters  nav-effect" onClick={display_others}>
          Others
        </div>
      </div>
      <div className="row cards-list wrapper">
        {projects.map((project) => {
          // const id = projects.indexOf(project);
          console.log(project);
          return (
            <div
              key={project.title}
              className={`col-md-4 col-sm-6 ${project.type} ${showproj}`}
            >
              <div className="m-4 mycard">
                <img src={project.image} alt={project.title} height="200vh" />
                <div className="card-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.url}
                    class="btn"
                  >
                    Go to Project
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        <div className={`col-md-4 col-sm-6 web ${showproj}`}>
          <div className="m-4 mycard">
            <img
              src={`${process.env.PUBLIC_URL}/assets/portfolio.png`}
              alt="This Portfolio Website"
              height="200vh"
            />
            <div className="card-info">
              <h3>Portfolio Website</h3>
              <p>The portfolio website you are staring at right now!</p>
              <a target="_blank" rel="noopener noreferrer" href="/" class="btn">
                Go to Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
