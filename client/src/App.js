import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Navigation } from './components/Nav';
import NewURL from './pages/Home';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navigation />
      <NewURL />
      {/* <Footer/> */}
    </>
  );
}

export default App;
