import React from 'react';
import './global.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Createaccount from './Components/Pages/Createaccount';


const App = () => {
  return (
    <div className="main">
       <Router>
        <Home/>
        <Routes>
          <Route path='/createaccount' element={<Createaccount/>}/>
        </Routes>
       </Router>
    </div>
  )
}

export default App
