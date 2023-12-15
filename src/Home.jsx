//Here a Home page will be there
import React from 'react';
import Pageone from './Components/Pages/Pageone';
import Blog from './Components/Pages/Blog';
import Navbar from './Components/Navbar/Navbar.jsx';
import './global.css'

const Home = () => {
  return (
    <div className='main'>
        <Navbar/>
        <Pageone/>
        <br/>
        <br/>
        <h3>Blogs</h3>
        <Blog/>
    </div>
  )
}

export default Home
