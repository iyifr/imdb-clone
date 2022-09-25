import React, { useState, useEffect} from 'react' ;
import MovieList from '../Movies/MovieList';
import Homecarousel from './/HeadCarousel';
import axios from 'axios';
import './/home.css';


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

        <div className= 'home'>
            <Homecarousel items = {movieData}/>
       </div>
       
        <MovieList/>
        </>
    )

}

export default HomePage