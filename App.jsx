import React from 'react';
import './App.css'; // Import your CSS file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import HomePage from './HomePage'; // Import HomePage component
import AboutPage from './AboutPage'; // Import AboutPage component
import ContactPage from './ContactPage'; // Import ContactPage component
import NavigationBar from './NavigationBar'; // Import NavigationBar component
import Footer from './Footer'; // Import Footer component

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar /> {/* Navigation bar at the top */}
        <div className="content">
          <Routes> {/* Wrap Routes around Route components */}
            {/* Routes for different pages */}
            <Route path="/" element={<HomePage />} /> {/* Default home page */}
            <Route path="/about" element={<AboutPage />} /> {/* About page */}
            <Route path="/contact" element={<ContactPage />} /> {/* Contact page */}
          </Routes>
        </div>
        <Footer /> {/* Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
