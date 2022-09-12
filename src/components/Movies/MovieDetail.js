
import React , {useState , useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './/MovieDetail.css';


const MovieDetails = ()=> {
    const [info, setInfo] = useState();
    const { id } = useParams()

    const getDetails = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3f70f3effc381814fe3dc447d15bb5c6&language=en-US&page=1`).then(
            (response)=> { 
                const filmInfo = response.data.results;
                setInfo(filmInfo)
            }
            )
      }
      

      useEffect(()=> {
        getDetails()
        window.scrollTo(0,0)
      });
      
    
      

    
    const data = info


    return (
        <>
         <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${data? data.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${data? info.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{info ? info.original_title : ""}</div>
                        <div className="movie__tagline">{info ? info.tagline : ""}</div>
                        <div className="movie__rating">
                            {info ? info.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{info ? "(" + info.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{info ? info.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{info ? "Release date: " + info.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                info && info.genres
                                ? 
                                info.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{info ? info.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div> </>
        

        

        )
}
export default MovieDetails

