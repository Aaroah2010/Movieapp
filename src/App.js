import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import {Movies} from './Movies.jsx'


function App() {
  let [movie, setMovie] = useState("") 
  let [movieName, setMovieName] = useState("") 

  let type = (e)=>{
    setMovie(e.target.value)
    }
    let find = () =>{
     axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0bf5f81280962229c9b1a03a26a4b34f&query=${movie}&language=en-US&page=1`)
     .then(function(response){
       console.log(response)
       let data = response.data
       setMovieName(data)

     })
    }
  return (
   <> <div className="App">
    <input type="text"  placeholder='enter movie name ' value={movie} onChange={type}/>
<button onClick={find}>SEARCH</button>   
  <div> {movieName && (movieName.results.length == 0 ? <h1>Oops! your movie is not found</h1> :  (<Movies data={movieName}/>))} 
  </div>
   
    </div>
    </>
  );
}

export default App;
// https://api.themoviedb.org/3/search/movie?api-key=0bf5f81280962229c9b1a03a26a4b34f=&language=en-US&page=1

//