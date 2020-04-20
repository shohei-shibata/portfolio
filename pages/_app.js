import '../assets/css/main.css';
import '../assets/css/fonts.css';

const App = ({ Component, pageProps }) => {
  return (
    <Component {..pageProps} />
  );
};

export default App;
