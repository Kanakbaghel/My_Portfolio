import "./styles/Landing.css";
import video from "../images/Cyberpunkvid.mp4";
import Typist from "react-typist";
import { useState, useEffect } from "react";
import { LogoImg, LogoCont } from "./styles/socialLogo";
import socialLinks from "../config/placeholders/SocialLinks";

function Landing() {
  const nameObj = { name: " Srishty M ", role: "" };
  const [count, setCount] = useState(1);
  // const [article, setArticle] = useState("a");

  useEffect(() => {
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  /*
  setInterval(() => {
    article === "a" ? setArticle("an") : setArticle("a");
    console.log("Article: " + article);
  }, 2400); 
*/
  return (
    <div id="landing">
      <video class="videoclass" autoPlay="autoplay" muted loop width="100%">
        <source src={video} type="video/mp4" />
      </video>
      <div class="mycontent">
        <div class="d-flex justify-content-center">
          <h2>
            const me = {"{ "}
            <br /> {"\t name : "} {JSON.stringify(nameObj.name)} {","}
          </h2>
        </div>
        <div class="d-flex justify-content-center">
          <h2>
            <div className="d-flex">
              <div className="pe-2">role : </div>
              <div className="my-roles">
                {count ? (
                  <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                    <span>Web Developer</span>
                    <Typist.Backspace count={14} delay={800} />
                    <span>ML Engineer</span>
                    <Typist.Backspace count={13} delay={800} />
                    <span>DevOps Enthusiast</span>
                    <Typist.Backspace count={24} delay={800} />
                    <span>OpenSource Contributor</span>
                    <Typist.Backspace count={24} delay={800} />
                    <span>CyberSec Enthu</span>
                    <Typist.Backspace count={13} delay={800} />
                  </Typist>
                ) : (
                  ""
                )}
              </div>
              {" \n}"}
            </div>
          </h2>
        </div>
        <div class="d-flex landing-icons">
          {
            // eslint-disable-next-line array-callback-return
            socialLinks.map((link) => {
              const classes = "fab p-3 " + link.icon;
              console.log(classes);
              if (link.hide !== true) {
                return (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.url}
                    key={link.name}
                  >
                    {link.icon ? (
                      <i class={classes}></i>
                    ) : (
                      <LogoCont>
                        <LogoImg
                          className="sociallogo_img"
                          src={link.img}
                          alt={link.name}
                        />
                      </LogoCont>
                    )}
                  </a>
                );
              }
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Landing;
