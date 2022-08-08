import React , {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar1 } from './components/Navbar/Navbar';
import Home from './components/Homepage/Home';
import MovieList from './components/Movies/MovieList'
import SeriesList from './components/Series/SeriesList'
import SeriesDetails from './components/Series/SeriesDetails';
import axios from 'axios';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import MovieDetails from './components/Movies/MovieDetail';


function App() {
  {/*const [data , setData] = useState([]);


  useEffect(() => {
    axios.get('').then((response)=> {

    })
  }, [])
*/}
  return (
    <Router> 
        <Navbar1 />
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/movies/:id' element = {<MovieList />} />
          <Route path = '/movies/:type' element = {<MovieDetails />} />
          <Route path = '/series' element = {<SeriesList />} />
          <Route path = '/series/:type' element = {<SeriesDetails />} />
        </Routes>

    </Router>
  )
}

export default App;
