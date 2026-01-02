import "./styles/footer.css";
import { LogoCont, LogoImg } from "./styles/socialLogo";
import socialLinks from "../config/placeholders/SocialLinks";

function Footer() {
  return (
    <footer>
      <div className="d-flex flex-column justify-content-center footer">
        <div>
          <h3>srisHty mAnGutte</h3>
        </div>
        <div>
          {socialLinks.map((l) => {
            const classes = "fab p-3 " + l.icon;
            return (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={l.url}
                key={l.name}
              >
                {l.icon ? (
                  <i class={classes}></i>
                ) : (
                  <LogoCont>
                    <LogoImg
                      className="sociallogo_img"
                      src={l.img}
                      alt={l.name}
                    />
                  </LogoCont>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
