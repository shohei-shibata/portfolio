import Link from 'next/link';

const Nav = () => (
  <nav>
    <div id="logo-container">
      <Link href='/'>
        <a title="About Me"><img id="logo-img" src='/img/Logo.png' /></a>
      </Link>
    </div>
    <div id="nav-menu">
      <label htmlFor="nav-menu-mobile-toggle">
        <div id="nav-menu-mobile-icon">
          <div id="nav-icon-mobile-open"><i className="fas fa-bars"></i></div>
          <div id="nav-icon-mobile-close"><i className="fas fa-times"></i></div>
        </div>
      </label>
      <input type="checkbox" id="nav-menu-mobile-toggle" />
      <div id="nav-menu-list">
        <ul>
          <li><Link href="/"><a className="nav-item">Home</a></Link></li>
          <li><Link href="/services"><a className="nav-item">Services</a></Link></li>
          <li><Link href="/projects"><a className="nav-item">Projects</a></Link></li>
          <li><Link href="/about"><a className="nav-item">About</a></Link></li>
          <li><Link href="/contact"><a className="nav-item">Contact</a></Link></li>
        </ul>
      </div>			
    </div>
  </nav>
);

export default Nav;
