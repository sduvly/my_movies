import MovieCard from "./MovieCard"
import Navbar from "./Navbar"
import {useState} from 'react'
function MoviePage({ismovies}){
    const [currentMovie, setCurrentMovie] = useState('')

    return(
    <> 
        <Navbar currentMovie={currentMovie} />
       {ismovies.map(m => <MovieCard key={m.id} movies={m} setCurrentMovie={setCurrentMovie}/>)}
    </>
    )
}

export default MoviePage;