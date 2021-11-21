import {useEffect, useState} from "react"
import MovieDisplay from "./MovieDisplay"
function MoviesWatched(){
    const [mymovies, setMymovies] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/tickets")
      .then(resp => resp.json())
      .then(movie => {
        console.log(movie)
        setMymovies(movie)})
    }, [])
    
    return(
        <>
           {mymovies.map(m => <MovieDisplay key={m.id} display={m}/>)}
        </>
    )
}

export default MoviesWatched