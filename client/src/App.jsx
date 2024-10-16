import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Download from './pages/Download';
import Career from './pages/Career';
import FlutterPosition from './pages/FlutterPosition';
import IoT from './pages/IoT';
import TechWriter from './pages/TechWriter';
import Community from './pages/Community';
import Privacy from './pages/Privacy';
import Faq from './pages/Faq';
import Agreement from './pages/Agreement';
import Safety from './pages/Safety';
import Store from './pages/Store';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Locations from './pages/Locations';
import Blog from './pages/Blog';

function App() {
  return (
    <div className='p-0 m-0'>
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/services'
            element={<Services />}
          />
          <Route
            path='/locations'
            element={<Locations />}
          />
          <Route
            path='/blog'
            element={<Blog />}
          />
          <Route
            path='/download'
            element={<Download />}
          />
          <Route
            path='/career'
            element={<Career />}
          />
          <Route
            path='career/flutter-position'
            element={<FlutterPosition />}
          />
          <Route
            path='career/iot-engineer'
            element={<IoT />}
          />
          <Route
            path='career/technical-writer'
            element={<TechWriter />}
          />
          <Route
            path='/community'
            element={<Community />}
          />
          <Route
            path='/privacy-policy'
            element={<Privacy />}
          />
          <Route
            path='/faq'
            element={<Faq />}
          />
          <Route
            path='/user-agreement'
            element={<Agreement />}
          />
          <Route
            path='/safety'
            element={<Safety />}
          />
          <Route
            path='/store'
            element={<Store />}
          />
          <Route
            path='/how-helgg-scooters-is-enabling-planet-friendly-transport-in-nigeria/'
            element={<Blog1 />}
          />
          <Route
            path='/how-helgg-scooters-interna-and-enactcare-won-paadcs-4-5-million-naira-equity-free-funding/'
            element={<Blog2 />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
