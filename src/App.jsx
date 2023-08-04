import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Services from './Components/Services.jsx';



import './styles/App.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/mediaquery.scss';

const App = () => {
  return (
      <>
        <Router>
          <Header/>
          <Routes>
            <Route path = '/' element = {<Home/>} />
            <Route path = '/contact' element = {<Contact/>} />
            <Route path = '/services' element = {<Services/>} />
          </Routes>
          <Footer/>
        </Router>
      </>
  )
}

export default App