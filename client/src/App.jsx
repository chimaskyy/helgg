import { } from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Download from "./pages/Download";
import Career from "./pages/Career";
import FlutterPosition from "./pages/FlutterPosition";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/download" element={<Download />} />
        <Route path="/career" element={<Career />} />
        <Route path="career/flutter-position" element={<FlutterPosition />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
