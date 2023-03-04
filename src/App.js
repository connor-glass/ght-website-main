
import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import AboutUs from './AboutUs';
import RequestConsultation from './RequestConsultation';
import React from 'react';
import './WebsiteBackground2.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



 
function App() {
  return (
      <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/AboutUs" element={<AboutUs />}/>
            <Route exact path="/Contact" element={<Contact />}/>
            <Route exact path="/RequestConsultation" element={<RequestConsultation />}/>
           
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
