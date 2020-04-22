import Layout from '../components/Layout';
import '../assets/css/main.css';
import '../assets/css/fonts.css';


const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
