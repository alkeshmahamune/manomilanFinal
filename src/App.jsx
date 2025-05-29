import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManomilanLogin from './components/ManomilanLogin.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ManomilanLogin />} />
      </Routes>
    </Router>
  )
};

export default App;
