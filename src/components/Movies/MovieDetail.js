import React , {useState , useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './/MovieDetail.css';


const MovieDetails = ()=> {
    const [movieDetails, setmovieDetails] = useState([]);
    const { id } = useParams()

    const getDetails = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3f70f3effc381814fe3dc447d15bb5c6&language=en-US&page=1`).then(
            (response)=> { 
                const filmInfo = response.data.results;
                setmovieDetails(filmInfo)
            }
            )
      }
      

      useEffect(()=> {
        getDetails()
        window.scrollTo(0,0)
      }, []);
      
    
      

    
    const data = movieDetails;


    return (
        <>
        <div className = 'movieBanner'>
            <image 
            src =  {`https://image.tmdb.org/t/p/original${data?data.backdrop_path:''}`}
            className = 'bannerImg'
            alt= 'Movie banner'
            />
        </div>
        <div className = 'bannerText'>  
        <hr></hr>
        <h1 className = 'bannerTitle'>{data?data.original_title:''}</h1>
        <p>Release Date : {data?data.release_date:''}</p>
        <p className = 'movieDesc'>{data?data.overview :''}</p>

        </div>
        </>
        

        

        )
}
export default MovieDetails