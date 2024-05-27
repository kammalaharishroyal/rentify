
import './App.css';
import React from 'react';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PropertyDetails from './components/PropertyDetails';
// import Property from './components/Property';

function App() {
  return(
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />}/>
          
          <Route path="/property/:id" element={<PropertyDetails/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
