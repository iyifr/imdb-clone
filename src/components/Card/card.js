import React, {useState, useEffect} from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './/card.css';
import {  LinkContainer }  from 'react-router-bootstrap'


const Card= ({movies}) => {
const [isLoading , setIsLoading] = useState(true);
const setTimeOut = ()=> null;

useEffect(()=> {
    setTimeOut(() => {
        setIsLoading(false)
    }, 1500) 
}, [])

return <>
{
    isLoading?
    <div className = "Card">
        <SkeletonTheme color = '#202020' highlightColor = '444'>
            <Skeleton height= {300} duration = {2} />
        </SkeletonTheme>
    </div>
    :
    <LinkContainer to = {`movie/${movies.id}`} style = {{textDecoration : 'none' , color : 'white'}} >
        <div className = 'Card'>
            <img className= 'card__img' 
            src = {`https://image.tmdb.org/t/p/original${movies?movies.poster_path:''}`}
             alt = "Movie picure" />
            <div className ="Card_overlay">
                <div className = 'card__title'>
                    {movies?movies.original_title:''}
                </div>
                <div className = "card_runtime">{movies?movies.original_title:''}
                </div>
                <div className = 'card_description'>{movies?movies.overview.slice(0,118)+'...':''}</div>
            </div>
        </div>
    </LinkContainer>
}

</>

}
export default Card