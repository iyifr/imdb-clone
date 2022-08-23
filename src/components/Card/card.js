import React, {useState, useEffect} from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './/card.css';
import {  LinkContainer }  from 'react-router-bootstrap'


const Card= ({movies}) => {

return <>

    <LinkContainer to = {`movie/${movies.id}`} style = {{textDecoration : 'none' , color : 'white'}} >
        <div className = 'Card'>
            <img className= 'card__img' 
            src = {`https://image.tmdb.org/t/p/original${movies?movies.poster_path:''}`}
             alt = "Movie picure" />
            <div className ="overlay1">
                <div className = 'title'>
                    {movies?movies.original_title:''}
                </div>
                <div className = "runtime">{movies?movies.release_date:''}
                </div>
                <div className = 'description'>{movies?movies.overview.slice(0,118)+'...':''}</div>
            </div>
        </div>
    </LinkContainer>


</>

}
export default Card