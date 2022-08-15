/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useState , useEffect} from 'react'
import './/moviepage.css'
import Card from '../Card/card'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    const getData = ()=> {
        axios.get(`https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=3f70f3effc381814fe3dc447d15bb5c6&language=en-US&page=1`).then(
            (response)=> { 
                const data = response.data.results;
                setMovieList(data)
            }
            )
       }
    useEffect(() => {
        getData()
}, [])

    useEffect(()=> {
        getData()
    }, [type])


    return <>
        <div className = "movie_list" >
            <h2 className = 'list_title'> {type ? type : 'POPULAR'.toUpperCase()}</h2>
            <Container fluid="md">
            <Row className="justify-content-lg-center">
                {movieList.map(movie=> (
                    <Col lg = {2} sm ={4} xs={6}>
                        <Card movies={movie} />
                    </Col> 
                )
            )}
            </Row>
            </Container>


        </div>
    </>
}

export default MovieList