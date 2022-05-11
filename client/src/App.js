import './App.css';
import { Navigation } from './components/Nav';
import NewURL from './pages/Home';
import URLshortener from './pages/Shortener';

function App() {
  return (
    <>
      <Navigation />
      {/* <NewURL /> */}
      <URLshortener />
    </>
  );
}

export default App;
