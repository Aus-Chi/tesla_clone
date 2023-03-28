import React, { useEffect, useState } from 'react';
import Header from './Header';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import HeaderBlock from './HeaderBlock';
import './App.css'
import Login from './Login';


import SignUp from './SignUp';
import TeslaAccount from './TeslaAccount';


function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  
  return (
    <div className="App">
     
     <Router>
     
      <Routes>
     <Route exact path='/' element={<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}></Route>
     <Route exact path="/login" element={<Login />} />
     <Route exact path="/teslaaccount" element={<TeslaAccount />} />
     </Routes>
     
     </Router>
     
    </div>
  );
}

export default App;
