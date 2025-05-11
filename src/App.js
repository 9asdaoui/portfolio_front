import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Messages from './components/messages';
import Profile from './components/profile';
import Projects from './components/projects';




function App() {
  return (
    <div className="App">
      <Router>

        <Header />

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Messages />} />
        </Routes>

        <Footer />

      </Router>
              
    </div>
  );
}

export default App;
