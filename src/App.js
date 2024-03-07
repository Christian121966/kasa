
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/accueil/Accueil';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import './App.scss';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
