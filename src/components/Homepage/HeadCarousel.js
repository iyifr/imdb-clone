import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Homecarousel({info}) {
  return (
    <Carousel controls = {false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://img.freepik.com/free-vector/black-wide-banner-with-shadow-lines-design_1017-34216.jpg?w=2000"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style = {{textAlign: "left"}}>First slide label</h3>
          <p style = {{textAlign: "left"}}>Some filler text</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/black-wide-banner-with-shadow-lines-design_1017-34216.jpg?w=2000"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>some filler text</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/black-wide-banner-with-shadow-lines-design_1017-34216.jpg?w=2000"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Last slide bitch 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Homecarousel;