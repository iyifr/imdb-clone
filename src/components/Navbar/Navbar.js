import React from 'react' ; 
import {Container, Nav , Navbar} from 'react-bootstrap'
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
                    className= 'd-inline-block align-top' />
                </Navbar.Brand>
                <Nav className = 'me-right'>
                    <Nav.Link href = '#'>Home</Nav.Link>
                    <Nav.Link href = '#'>Price</Nav.Link>
                    <Nav.Link href = '#'>Link</Nav.Link>
                    <Nav.Link href = '#'>Ode</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
)
}