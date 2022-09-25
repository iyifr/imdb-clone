import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Homecarousel({items}) {
  return (
    <Carousel controls = {false} interval = {2}>
      {
        items.map(item =>
          <Carousel.Item key ={item.id} >
          <div className = "Imagebox">
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/original${item && item.backdrop_path}`}
            alt= ''
          />
          </div>
          <Carousel.Caption className = 'overlay'>
            <h3 style = {{textAlign: "left"}}>{item ? item.original_title : ""}</h3>
            <div className= 'posterInfo'>
            <p>{item ? item.overview : ""}</p>
            <p> Release Date : {item.release_date}</p>
            <p>Avg. Rating - {item? item.vote_average : ''}</p>
            </div> 
          </Carousel.Caption>
        </Carousel.Item>

        )
      }
    </Carousel>
  );
}

export default Homecarousel;