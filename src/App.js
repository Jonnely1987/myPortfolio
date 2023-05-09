import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import  Home from './components/pages/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Home />
      </Router>
      
    </>
  );
}

export default App;
