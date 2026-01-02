import "./styles/Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as WorkIcon } from "../images/work.svg";
import { ReactComponent as SchoolIcon } from "../images/school.svg";
import { ReactComponent as ComIcon } from "../images/community.svg";
import experiences from "../config/experience/Experience";

function Experience() {
  return (
    <div id="experience" className="container-fluid">
      <h2 className="topic-head">Experience</h2>
      {/* Create a timeline here */}
      <VerticalTimeline lineColor="#b46fd9">
        {experiences.map((e) => {
          const id = experiences.indexOf(e);
          const grpNum = Math.floor(id / 2);
          const Icon =
            e.type === "work"
              ? WorkIcon
              : e.type === "commu"
              ? ComIcon
              : SchoolIcon;
          const alignment = id % 2 === 0 ? "left" : "right";
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: `rgb(${20 + 30 * grpNum}, ${
                  82 - 15 * grpNum
                }, 128)`,
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: `7px solid  rgb(${20 + 30 * grpNum}, ${
                  82 - 15 * grpNum
                }, 128)`,
              }}
              date={e.date}
              iconStyle={{
                background: `rgb(${140 + 30 * grpNum}, ${
                  190 - 15 * grpNum
                }, 255)`,
                color: "#fff",
              }}
              icon={<Icon />}
              position={alignment}
            >
              <h3 className="vertical-timeline-element-title">{e.heading}</h3>
              <h4 className="vertical-timeline-element-subtitle">{e.sub}</h4>
              <p>{e.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
