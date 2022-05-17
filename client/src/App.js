import { Navigation } from './components/Nav';
import { NavBar } from './components/Navbar';
// import URLshortener from './pages/Shortener';
import URLshortener from './pages/Home';

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <NavBar />
      <URLshortener />
    </>
  );
}

export default App;
