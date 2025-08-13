import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FichaFuncionario from './pages/FichaFuncionario';
import DirectorioFuncionarios from './pages/DirectorioFuncionarios';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/funcionarios/:nombreUrl" element={<FichaFuncionario />} />
        <Route path="/funcionarios" element={<DirectorioFuncionarios />} />
      </Routes>
    </Router>
  );
};

export default App;



