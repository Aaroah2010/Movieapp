import React from 'react';




const MC = (props) => {
    let image = {
        margin : ' 0% 40% ',
        height : '400px',
        width  : '300px'
    
    }
    let para = {
        width  : '500px',
        margin : ' 0% 43% ',
        fontSize : "25px"

    }
    let h1 = {
        margin : ' 0% 43% ',
        fontSize : "32px",
        width  : '500px',


    }
    let p = {
width : '600px',
margin : ' 0% 35% '

    }

    return (
        <div >
        <img src={"https://image.tmdb.org/t/p/w500" + props.value.poster_path} alt="" style={image}  />
        <h3 style={h1} >{props.value.title}</h3>
        <br />
        <p style={para}>IMDB - {props.value.vote_average}
        </p>
        <p style={p}
        >
        Overview  - {props.value.overview}
         </p> 
         <br />
         <br />
               </div>
            
      );
}
 
export  {MC};