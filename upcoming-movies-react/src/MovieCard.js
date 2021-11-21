
import styled from 'styled-components';

function MovieCard({movies, setCurrentMovie}){
    
        function handleLike(){
           console.log(movies) 
        }
    return(
        <>
        <CardContainer>
         <h2 onClick={() => setCurrentMovie(movies) }>{movies.title}</h2>
         <video width="450" height="300" controls>
         <source src={movies.link} type="video/mp4"/>
              </video>
              <ButtonLike>
         <button onClick={handleLike}className="emoji-button like">Like ❤️ {movies.likes}</button>
              </ButtonLike>
         <p>{movies.genre}</p>
         <p>{movies.releaseDate}</p>
         <p>{movies.description}</p>
         </CardContainer>
        </>
    )
}
export default MovieCard



const ButtonLike = styled.div`


justify-content: space-evenly;
margin: 0px;
padding : 0px;
& button{
  font-size: 15px;
}

`

const CardContainer = styled.div`

flex-direction: row;
float: left;
align-items: center;


// font-family: 'Robato', sans-serif;  
// justify-content: space between;
// & h2{
//   display: flex;
//   flex-direction: row;
//   float: left;
//   padding: 5px;
// }`

// const Video = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: center;
// margin-left: auto;
// margin-right: auto;
// border: 2px solid black;
// padding: 20px;
// & img{
//   border: 5px solid black;
//   opacity: 0.1;
// }
// background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url("https://thumbs.dreamstime.com/b/plate-fork-knife-background-top-view-plate-fork-knife-wooden-background-top-view-170949504.jpg");
// background-repeat: no-repeat;
// background-size: cover;
// background-position: ceter;
// max-width: 100%;
//   height: auto;

// `
