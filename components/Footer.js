import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer>
    <div id="footer-container">
      <small>© 2020 Shohei Shibata. All rights reserved. </small>
      <div>
        <a target="_blank" href="https://github.com/shohei-shibata" className="footer-social-logo">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/shohei-shibata-53867a41/" className="footer-social-logo">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
