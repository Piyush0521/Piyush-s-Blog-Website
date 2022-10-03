// import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar';
import { useState } from 'react';
import Home from './Home';
import BlogDetails from './BlogDetails';
import Create from './Create';



function App() {

  
return(
  <Router>
    <div className='App'>
    <Navbar />
      <Routes>
      
        {/* <Route exact path='/' element={<Navbar />} /> */}
      
        <Route exact path='/view' element={<Home />} />

        <Route exact path='/view/:id' element={<BlogDetails />} />

        <Route exact path='/newBlog' element={<Create />} />

      </Routes>
    </div>
    </Router>
  );
  
}

export default App;
