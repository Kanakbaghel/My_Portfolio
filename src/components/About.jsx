import myImg from "../images/mine.jpg";
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
          </FlexCont>
          <a
            className="button-link cool-btn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1QyRaCjsp1Wo_VYk9EccmCQPH34BoGQY7/view?usp=sharing"
          >
            Here's My Resume <Emb2>↗</Emb2>
          </a>
        </Summary>
      </div>
    </AboutContainer>
  );
}

export default About;
