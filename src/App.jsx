import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManomilanLogin from './components/ManomilanLogin.jsx';
import MultiStepRegistrationForm from './components/multistepForm.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<ManomilanLogin />} /> */}
        {/* <Route path="/" element={<MultiStepRegistrationForm />} /> */}
      </Routes>
    </Router>
  )
};

export default App;
