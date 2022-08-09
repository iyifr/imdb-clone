import React, { useState, useEffect} from 'react' ;
import MovieList from '../Movies/MovieList'
import SeriesList from '../Series/SeriesList';
import axios from 'axios';


const HomePage = ()=> {
    const [movieData , setmovieData] = useState([]);


  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3f70f3effc381814fe3dc447d15bb5c6&language=en-US&page=1').then(
        (response)=> { 
            const filmInfo = response.data.results;
            setmovieData(filmInfo)
        }
        )
  }, [])

 return (
        <>
        HomePage
        <MovieList data = {movieData} />
        <SeriesList />
        </>
    )

}

export default HomePage