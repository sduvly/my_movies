import {useEffect, useState} from "react"
import MoviePage from "./MoviePage";
import User from "./User";
import styled from 'styled-components'

function Main() {
  const [ismovies, setIsmovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
    .then(resp => resp.json())
    .then(movie => {
      console.log(movie)
      setIsmovies(movie)})
  }, [])
  return (
    
    <div className="App">
      <Title>
      <h1>Upcoming Movies</h1>
      </Title>
      <User />
      <MoviePage ismovies={ismovies}/>
    </div>
  );
}

export default Main;

const Title = styled.div`
background-image:linear-gradient(rgba(0, 0, 0, 0.),rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1484300681262-5cca666b0954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1327&q=80");
background-size:cover;
background-position: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(8px + 2vmin);
`
