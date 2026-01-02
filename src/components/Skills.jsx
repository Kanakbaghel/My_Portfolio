import "./styles/Skills.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import skills from "../config/skills/skills";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="skills" className="container-fluid">
      <h2 className="skillka-title topic-head">Skills</h2>
      <div className="row">
        {skills.map((skill) => {
          return (
            <div className="col-md-4">
              <div
                className="skillcard"
                data-aos="flip-left"
                data-aos-once="true"
              >
                <div>
                  <i className={skill.icon}></i>
                </div>
                <div className="skill-title">{skill.title}</div>
                <div className="skill-content">{skill.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
