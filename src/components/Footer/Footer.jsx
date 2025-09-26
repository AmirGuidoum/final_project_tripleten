import "./Footer.css";
import facebookIcon from "../../assets/facebook.svg";
import githubIcon from "../../assets/github.svg";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__developer">
        &copy; 2025 Supersite, Powered by News API
      </p>
      <div className="footer__social">
        <div className="footer__pages">
          <p className="footer__paragraph">Home</p>
          <p className="footer__paragraph">Triple Ten</p>
        </div>
        <div className="footer__icons">
          <img src={githubIcon} alt="github Icon" />
          <img src={facebookIcon} alt="facebook Icon" />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
