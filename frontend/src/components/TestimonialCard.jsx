import React from "react";


function Client (data){
     return(
        <div>
           <p>Name: {data.Name}</p>
           <p>Review: {data.Review}</p>
        </div>
     );
   }

export default Client;