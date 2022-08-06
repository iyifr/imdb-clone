import React from 'react' ; 
import {Container, Nav , Navbar, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



export const Navbar1 = ()=> {
return (
    <>
        <Navbar expand= 'lg' bg = 'dark' variant = 'dark' p-lg = '15'>
            <Container>
                <Navbar.Brand href = '#home'>
                    <img
                    alt=""
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                    width = '100'
                    height = '60 '
                    className= 'd-inline-block align-top me-left' />
                </Navbar.Brand>
                <Nav className = 'me-auto'>
                <NavDropdown
              id="nav-dropdown-dark-example"
              title="Categories"
              menuVariant="dark"
            >
              <NavDropdown.Item>Movies</NavDropdown.Item>
              <NavDropdown.Item>
                Tv series
              </NavDropdown.Item>
              <NavDropdown.Item>Tv shows</NavDropdown.Item>
            </NavDropdown>
                    <Nav.Link href = '#'classname= "text-bold">Popular</Nav.Link>
                    <Nav.Link href = '#'>Top Rated</Nav.Link>
                    <Nav.Link href = '#'>Upcoming</Nav.Link>
                    
                </Nav>
            </Container>
        </Navbar>
    </>
)
}