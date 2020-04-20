const Nav = () => (
  <nav>
    <div id="logo-container">
      <a href="/index.html"><img id="logo-img" src='/img/Logo.png' /></a>
    </div>
    <div id="nav-menu">
      <label htmlFor="nav-menu-mobile-toggle" onClick={toggleNav()}>
        <div id="nav-menu-mobile-icon">
          <div id="nav-icon-mobile-open"><i className="fas fa-bars"></i></div>
          <div id="nav-icon-mobile-close"><i className="fas fa-times"></i></div>
        </div>
      </label>
      <input type="checkbox" id="nav-menu-mobile-toggle" />
      <div id="nav-menu-list">
        <ul>
          <li><h5 className="nav-item"><a href="/index.html">Home</a></h5></li>
          <li><h5 className="nav-item"><a href="/services.html">Services</a></h5></li>
          <li><h5 className="nav-item"><a href="/projects.html">Projects</a></h5></li>
          <li><h5 className="nav-item"><a href="/about.html">About</a></h5></li>
          <li><h5 className="nav-item"><a href="/contact.html">Contact</a></h5></li>
        </ul>
      </div>			
    </div>
  </nav>
);

export default Nav;
