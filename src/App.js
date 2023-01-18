import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import { Counter } from './pages/Home';

import './scss/app.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="container"></div>
        <Routes>
          <Route path="/" element={<Counter />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
