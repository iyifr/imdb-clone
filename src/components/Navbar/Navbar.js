import React from 'react' ; 
import Container from 'react-bootstrap/Container'
import  Nav  from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {  LinkContainer }  from 'react-router-bootstrap'



export const Navbar1 = ()=> {

return (
    <>
        <Navbar fixed = 'top' bg = 'dark' variant = 'dark' expand = 'lg md'>
            <Container>
                <LinkContainer to= '/'>
                <Navbar.Brand>
                    <img
                    alt=""
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                    width = '100'
                    height = '60 '
                    className= 'd-inline-block align-top me-left' />
                </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className = 'me-auto'>

                  <LinkContainer to = '/movies/popular'>
                        <Nav.Link>Popular</Nav.Link>
                  </LinkContainer>
  
                  <LinkContainer to = '/movies/top-rated'>
                    <Nav.Link>Top Rated</Nav.Link>
                  </LinkContainer>
  
                  <LinkContainer to = '/movies/upcoming'>
                    <Nav.Link>Upcoming</Nav.Link>
                  </LinkContainer>
  
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
)
}