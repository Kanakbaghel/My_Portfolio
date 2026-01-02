import myImg from "../images/meow.jpg";
import "./styles/About.css";
import {
  Image,
  MB2,
  Emb,
  FlexCont,
  Summary,
  AboutContainer,
  Emb2,
} from "./styles/About.styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  aboutPara1,
  AboutComponent,
  aboutPara3,
} from "../config/content/AboutData";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <AboutContainer className="container-fluid" id="about">
      <h2 className="topic-head">About Me</h2>
      <div className="row">
        <Image
          data-aos="fade-right"
          data-aos-once="true"
          src={myImg}
          alt="I, in the flesh."
          className="col-lg-4 image"
        />
        <Summary
          className="col-lg-8 d-flex justify-content-center flex-column summary"
          data-aos-once="true"
          data-aos="fade-up"
        >
          <FlexCont>
            <MB2>{aboutPara1}</MB2>

            <AboutComponent />

            <MB2>
              I'm skilled at{" "}
              <Emb2>
                {aboutPara3.stack.slice(0, -2).map((s) => {
                  return s + ", ";
                })}{" "}
              </Emb2>
              and <Emb2>GoLang </Emb2>
              I've worked on many project in full-stack using{" "}
              <Emb2>
                {aboutPara3.stack.slice(-2).map((s) => {
                  return s + ". ";
                })}
              </Emb2>
              and I am currently exploring <Emb> {aboutPara3.fields[0]} </Emb>
              I've learnt and created projects in{" "}
              <Emb> {aboutPara3.fields[1]} </Emb>. I'm an active Open-Source
              contributor.
            </MB2>
          </FlexCont>
          <a
            className="button-link cool-btn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/drive/folders/1ulBx8D5tBBexqPkdpy1xrC1s4ClaKIA5?usp=sharing"
          >
            Download Resume
          </a>
        </Summary>
      </div>
    </AboutContainer>
  );
}

export default About;
