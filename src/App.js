import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar1 } from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Home';
import MovieList from './components/Movies/MovieList'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import MovieDetails from './components/Movies/MovieDetail';


function App() {
  
  return (
    <Router> 
        <Navbar1 />
        <Routes>
        
          <Route exact path = '/' component = {<Homepage />} />
          <Route path = '/movies/:type' component = {<MovieList />} />
          <Route path = '/movies/:id' component = {<MovieDetails />} />
          
        </Routes>

    </Router>
    
  )
}

export default App;
