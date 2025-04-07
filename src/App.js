import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Messages from './components/messages';




function App() {
  return (
    <div className="App">
            <Header />
            <Messages />
            <Footer />
           
          
    </div>
  );
}

export default App;
