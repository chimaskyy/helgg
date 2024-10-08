import { useState } from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/services'
          element={<Services />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
