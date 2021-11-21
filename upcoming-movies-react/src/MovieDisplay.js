
function MovieDisplay({display}){
    return(
        <>
           <h2 >{display.title}</h2>
         <video width="450" height="300" controls>
         <source src={display.link} type="video/mp4"/>
              </video>
         <p>{display.genre}</p>
         <p>{display.releaseDate}</p>
         <p>{display.description}</p>
         
        </>
    )
}
export default MovieDisplay