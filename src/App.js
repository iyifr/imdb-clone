import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar1 } from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Home';
import MovieList from './components/Movies/MovieList'
import SeriesList from './components/Series/SeriesList'
import SeriesDetails from './components/Series/SeriesDetails'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import MovieDetails from './components/Movies/MovieDetail';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <Router> 
        <Navbar1 />
        <Routes>
          <Route path = '/' element = {<Homepage />} />
          <Route path = '/movies/:type' element = {<MovieList />} />
          <Route path = '/movies/:id' element = {<MovieDetails />} />
          <Route path = '/series/:type' element = {<SeriesList />} />
          <Route path = '/series/:id' element = {<SeriesDetails />} />
        </Routes>

    </Router>
  )
}

export default App;
