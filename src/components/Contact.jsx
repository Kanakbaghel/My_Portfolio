import "./styles/Contact.css";
import mailbox from "../images/gmail.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="contact" class="container-fluid">
      <h2 className="topic-head">Get in Touch</h2>
      <div className="d-flex justify-content-center mt-3">
        <img
          src={gmail}
          alt="gmail logo"
          className="gmail-img"
          data-aos="fade-right"
          data-aos-once="true"
        />
        <div className="contact-text" data-aos="fade-up" data-aos-once="true">
          <h4>I'd love to hear from you!</h4>
          <p>
            Whether you have a question, want to collaborate, or just want to
            say hi, feel free to reach out!
          </p>
          <div className="d-flex justify-content-center mt-4">
            <a
              href="mailto:kanak.bgl704@gmail.com"
              className="cool-btn contact-button"
            >
              <div className="pe-2 ps-2">Contact Me</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
