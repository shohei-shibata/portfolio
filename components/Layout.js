import HeadContents from './Head';
import Nav from './Nav';

const Layout = props => (
  <>
    <HeadContents />
    <Nav />
    <main class="flex-container-col">
      { props.children }
    </main>
  </>
);

export default Layout;
