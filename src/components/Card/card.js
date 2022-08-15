import React, {useState, useEffect} from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './/card.css';
import {  LinkContainer }  from 'react-router-bootstrap'


const Cards= ({movies}) => {
const [isLoading , setIsLoading] = useState(true);

useEffect(()=> {
    setTimeOut(() => {
        setIsLoading(false)
    }, 1500) 
}, [])

return <>
{
    isLoading?
    <div className = "cards">
        <SkeletonTheme color = '#202020' highlightColor = '444'>
            <Skeleton height= {300} duration = {2} />
        </SkeletonTheme>
    </div>
    :
    <LinkContainer to = {`movie/${movies.id}`} style = {{textDecoration : 'none' , color : 'white'}} >
        <div className = 'cards'>
            <img className= 'cards__img' 
            src = {`https://image.tmdb.org/t/p/original${movies?movies.poster_path:''}`}
             alt = "Movie picure" />
            <div className ="Cards_overlay">
                <div className = 'cards__title'>
                    {movies?movies.original_title:''}
                </div>
                <div className = "cards_runtime">{movies?movies.original_title:''}</div>
                <div className = 'cards_runtime'>{movies?movies.release_date:''}</div>
                <div className = 'cards_description'>{movies?movies.overview:''}</div>
            </div>
        </div>
    </LinkContainer>
}

</>

}
export default Cards