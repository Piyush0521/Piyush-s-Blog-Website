import { useEffect, useState } from "react";
import LeaderList from "./Leaders";
import useFetch from "./useFetch";

const Home = () => {

   const {Data: Leaders, Pending, Error } = useFetch('http://localhost:8000/leaders');   

    return ( 

        <div className="home">
            {Error && <div> { Error }</div> }
            {Pending && <div>--------Loading------</div>}
            { Leaders && <LeaderList Leaders={Leaders} title="Leaders of the time" />}
            
        </div>

     );
}
 
export default Home;
