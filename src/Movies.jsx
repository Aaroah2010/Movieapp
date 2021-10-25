import React from 'react';
import {MC} from './MC.jsx';

const Movies = (props) => {
    return (
        <>
        {props.data.results.map(function(value){
     return(
       <>
     <div> <MC value={value} id='MC'/>
     </div>
       </>
     )
   }) }
        </>
      );
}
 
export  {Movies};