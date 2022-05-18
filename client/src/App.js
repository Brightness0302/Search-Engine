import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Posts from './components/Posts';
import { GlobalProvider } from './Context/GlobalState';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Login from './components/Login'
import Register from './components/Register'; 
import Dashboard from './components/Dashboard';
import Setting from './components/Setting';
import General from './components/category/General';
import Business from './components/category/Business';
import Entertainment from './components/category/Entertainment';
import Health from './components/category/Health';
import Science from './components/category/Science';
import Sports from './components/category/Sports';
import Tech from './components/category/Tech';
import Tabs from './components/Tabs';
import axios, { Axios } from 'axios';
import Pagination from './components/Pagination';

const App = () => {

  return (
    <Router>
      <GlobalProvider>
        <Navbar />
        <Tabs />
        <section className='container'>
       
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path ="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Setting /> } />
            <Route path="/general" element={<General /> } />
            <Route path="/business" element={<Business /> } />
            <Route path="/entertainment" element={<Entertainment /> } />
            <Route path="/health" element={<Health /> } />
            <Route path="/science" element={<Science /> } />
            <Route path="/sports" element={<Sports /> } />
            <Route path="/tech" element={<Tech /> } />
            
          </Routes>
        </section>

      </GlobalProvider> 
    </Router>
      
  );
}

export default App;
