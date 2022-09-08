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
          <Route path = '/' element = {<Homepage />} />
          <Route path = '/movies/:type' element = {<MovieList />} />
          <Route path = '/movies/:id' element = {<h1> MOVIESSSSS </h1>} />
        </Routes>

    </Router>
  )
}

export default App;
