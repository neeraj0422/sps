import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Beginner from './Components/Beginer';
import Intermediate from './Components/Intermediate'; // Import other level components similarly
import Advanced from './Components/Advanced'; // Import other level components similarly
import Mastery from './Components/Mastery'; // Import other level components similarly

import './styles/App.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/mediaquery.scss';
import './styles/services.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Beginner" element={<Beginner />} />
        <Route path="/Intermediate" element={<Intermediate />} />
        <Route path="/Advanced" element={<Advanced />} />
        <Route path="/Mastery" element={<Mastery />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
