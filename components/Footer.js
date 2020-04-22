import { FontAwesomeIcon } from 'react-fontawesome';

const Footer = () => (
  <footer>
    <div id="footer-container">
      <small>© 2020 Shohei Shibata. All rights reserved. </small>
      <div>
        <a target="_blank" href="https://github.com/shohei-shibata" className="footer-social-logo">
          <FontAwesomeIcon icon='coffee' />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/shohei-shibata-53867a41/" className="footer-social-logo"><i className="fab fa-linkedin fa-2x"></i></a>
      </div>
    </div>
  </footer>
);

export default Footer;
