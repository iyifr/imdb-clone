import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Homecarousel({items}) {
  return (
    <Carousel controls = {false} interval = {2}>
      {
        items.map(item =>
          <Carousel.Item>
          <img
            className="d-block w-100 posterImage"
            src={`https://image.tmdb.org/t/p/original${item && item.backdrop_path}`}
            alt= ''
          />
          <Carousel.Caption>
            <h3 style = {{textAlign: "left"}}>{item ? item.original_title : ""}</h3>
            <div className= 'posterInfo'>
            <p style = {{textAlign: "left"}}>{item ? item.overview : ""}</p>
            <p style = {{textAlign: "left"}} className = "text-muted"> Release Date : {item.release_date}</p>
            <p style = {{textAlign: "left"}}>{item? item.vote_average : ''}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        )
      }

      {/*
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/black-wide-banner-with-shadow-lines-design_1017-34216.jpg?w=2000"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style = {{textAlign: "left"}}>Second slide label</h3>
          <p style = {{textAlign: "left"}}>some filler text</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/black-wide-banner-with-shadow-lines-design_1017-34216.jpg?w=2000"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style = {{textAlign: "left"}}>Third slide label</h3>
          <p style = {{textAlign: "left"}}>
            Dorime hsfg djfdsnrsrjg sr rginrbg wrgb etrb teb rtet hbtr  tebh et ertbhet het
          </p>
        </Carousel.Caption>
      </Carousel.Item>
  */ }  </Carousel>
  );
}

export default Homecarousel;