import React from 'react' ; 
import {Container, Nav , Navbar, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  LinkContainer }  from 'react-router-bootstrap'



export const Navbar1 = ()=> {
  const pathname = window.location.pathname;
return (
    <>
        <Navbar expand= 'lg' bg = 'dark' variant = 'dark' p-lg = '15'>
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
                <Nav className = 'me-auto'>
                <NavDropdown
              id="nav-dropdown-dark-example"
              title="Categories"
              menuVariant="dark"
            >
            <LinkContainer to = "/movies">
              <NavDropdown.Item> Movies</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to = "/series">
              <NavDropdown.Item>TV series</NavDropdown.Item>
            </LinkContainer>

            </NavDropdown>

                 { pathname === '/series' ?
                 <>
                 <LinkContainer to = '/series/popular'>
                  <Nav.Link>Popular</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to = '/series/binge-worthy'>
                  <Nav.Link>Binge-Worthy</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to = '/series/new-in'>
                  <Nav.Link>New In</Nav.Link>
                  </LinkContainer>
                  </> : <>
                   <LinkContainer to = '/movies/popular'>
                    <Nav.Link>Popular</Nav.Link>
                    </LinkContainer>
  
                    <LinkContainer to = '/movies/top-rated'>
                    <Nav.Link>Top Rated</Nav.Link>
                    </LinkContainer>
  
                    <LinkContainer to = '/movies/new-in'>
                    <Nav.Link>New In</Nav.Link>
                    </LinkContainer>
                    </>
                   }                    
                    
                    
                </Nav>
            </Container>
        </Navbar>
    </>
)
}