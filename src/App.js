import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/Footer';





function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Home/>
        <Footer />
      </Router>
    </>
  );
}
export default App;