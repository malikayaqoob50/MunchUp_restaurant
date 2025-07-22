import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Munchup from './pages/MunchUp';
import './style.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Munchup />
      </div>
    </Router>
  );
}

export default App;
