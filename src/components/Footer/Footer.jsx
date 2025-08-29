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
        <p>Home</p>
        <p>Triple Ten</p>
        <img src={githubIcon} alt="github Icon" />
        <img src={facebookIcon} alt="facebook Icon" />
      </div>
    </footer>
  );
}
export default Footer;
