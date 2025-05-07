import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import BottomNavBar from './component/BottomNavBar/BottomNavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ForOwners from './pages/ForOwners/ForOwners';
import OwnersManual from './pages/OwnersManual/OwnersManual';
import TenantsManual from './pages/TenantsManual/TenantsManual';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/for-owners" element={<ForOwners />} />
            <Route path="/owners-manual" element={<OwnersManual />} />
            <Route path="/tenants-manual" element={<TenantsManual />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/for-tenants" element={<div className="page-container"><h1>For Tenants Page</h1><p>Coming soon</p></div>} />
            <Route path="/pricing" element={<div className="page-container"><h1>Pricing Page</h1><p>Coming soon</p></div>} />
            <Route path="/contact" element={<div className="page-container"><h1>Contact Page</h1><p>Coming soon</p></div>} />
          </Routes>
        </main>
      </div>
      <Footer />
      <BottomNavBar />
    </Router>
  );
}

export default App;
