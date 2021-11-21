import Form from "./Form"
import {useState} from 'react'
import styled from 'styled-components'
import MoviesWatched from './MoviesWatched'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

function Navbar({currentMovie}){
    const [isvisible, setisvisible] = useState(false)
    
     function click(e){
          e.preventDefault()
         setisvisible(isvisible => !isvisible)
     }
    return(
        <Router>
        <Nav>
        <li >Home</li>
        <li>Liked</li> 
        
        <li><Link to={"/movieswatched"} className="nav-item1"href=" ">Movies Watched </Link></li>
        
        <li className="nav-item2"  onClick={click} >Form </li>
        {isvisible ?  <Form currentMovie={currentMovie}/>: null }
        {/* <MoviesWatched /> */}
        </Nav>
        </Router>
    )
}

export default Navbar



const Nav = styled.div`
  float: left;
  display: flex;
  list-style: none;
  margin-top: 0px;
  margin-left: 0px;
  padding-right: 40px;
  padding-bottom: 10px;

  & li {
    display: inline-block;
    margin: 20px;
    }
    & li a:visited {
        padding: 8px,0;
         color: red;
         text-decoration: none;
         text-transform: uppercase;
         font-size: 90%;
         border-bottom: 2px solid transparent;
         transition: border-bottom 0.2s;
     }

`