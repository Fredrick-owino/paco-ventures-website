import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import QualityExcellence from './pages/QualityExcellence';
import CustomerFocus from './pages/CustomerFocus';
import InnovationEfficiency from './pages/InnovationEfficiency';
import Sustainability from './pages/Sustainability';
import GeneralSupplies from './pages/GeneralSupplies';
import InstallationMaintenance from './pages/InstallationMaintenance';
import ElectricalMechanical from './pages/ElectricalMechanical';
import CivilWorks from './pages/CivilWorks';
import AboutPage from './pages/AboutPages';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/quality-excellence" element={<QualityExcellence />} />
        <Route path="/customer-focus" element={<CustomerFocus />} />
        <Route path="/innovation-efficiency" element={<InnovationEfficiency />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/general-supplies" element={<GeneralSupplies />} />
        <Route path="/installation-maintenance" element={<InstallationMaintenance />} />
        <Route path="/electrical-mechanical" element={<ElectricalMechanical />} />
        <Route path="/civil-works" element={<CivilWorks />} />
      </Routes>
    </Router>
  );
};

export default App;
