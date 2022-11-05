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
            <Route index element = {<Homepage />}></Route> 
            <Route path = 'movie/:id'  element = {<MovieDetails />} />
            <Route path = 'movies/:type' element = {<MovieList />} />
            <Route path = "/*" element = {
            <main style= {{padding: '1rem', marginTop: '300px'}}>
              <p>There is nothing here!</p>
            </main> } />

        
          
        </Routes>

    </Router>
  
  )
}

export default App;
