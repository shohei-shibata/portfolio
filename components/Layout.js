import HeadContents from './Head';
import Nav from './Nav';
import Footer from './Footer';

const Layout = props => (
  <>
    <HeadContents />
    <Nav />
    <main>
      { props.children }
    </main>
    <Footer />
  </>
);

export default Layout;
