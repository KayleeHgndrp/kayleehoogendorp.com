/* -------------------------- Internal Dependencies ------------------------- */
import {GlobalStyle} from '../src/css/GlobalStyles';
import '../src/css/normalize.css';
import Layout from './components/Layout';


function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;