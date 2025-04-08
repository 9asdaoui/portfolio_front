import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Messages from './components/messages';
import Profile from './components/profile';
import Projects from './components/projects';




function App() {
  return (
    <div className="App">
            <Header />
            <Profile />
            <Projects />
            <Messages />
            <Footer />
           
          
    </div>
  );
}

export default App;
