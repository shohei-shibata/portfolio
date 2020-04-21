import HeadContents from './Head';
import Nav from './Nav';

const Layout = props => (
  <>
    <HeadContents />
    <Nav />
    <main className="flex-container-col">
      { props.children }
    </main>
  </>
);

export default Layout;
