import React from 'react';
import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
          <img src={logo} className="App-logo" alt="logo" />
        </motion.div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
