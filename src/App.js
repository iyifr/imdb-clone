import React , {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar1 } from './components/Navbar/Navbar'
import Home from './components/Homepage/Home'
import axios from 'axios'

function App() {
  const [data , setData] = useState([]);


  useEffect(() => {
    axios.get('').then((response)=> {
      
    })
  }, [])

  return (
    <> 
        <Navbar1 />
        <Home />
    </>
  )
}

export default App;
