import "./Footer.css";
import facebookIcon from "../../assets/facebook.svg";
import githubIcon from "../../assets/github.svg";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <p className="footer__developer">
        &copy; 2025 Supersite, Powered by News API
      </p>
      <nav className="footer__social">
        <div className="footer__pages">
          <p onClick={() => navigate("/")} className="footer__paragraph">
            Home
          </p>
          <p
            onClick={() => window.open("https://tripleten.com/", "_blank")}
            className="footer__paragraph"
          >
            Triple Ten
          </p>
        </div>
        <div className="footer__icons">
          <img
            onClick={() =>
              window.open("https://github.com/AmirGuidoum", "_blank")
            }
            src={githubIcon}
            alt="github Icon"
            id="github-id"
          />
          <img
            onClick={() =>
              window.open("https://facebook.com/tripleten.tech", "_blank")
            }
            src={facebookIcon}
            alt="facebook Icon"
            id="facebook-id"
          />
        </div>
      </nav>
    </footer>
  );
}
export default Footer;
