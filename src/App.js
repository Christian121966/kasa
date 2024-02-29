
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Header from './components/header/Header'; // Correction de la casse pour correspondre au nom de fichier correct
import Accueil from './pages/Accueil';
import NotFound from './pages/NotFound';
import './App.css';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/kasa/" element={Accueil} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
