import Devjob from "./Devjob";
import { useState } from "react";

export default function BodyDevjobs()
{
    // API data
    const [data, setData] = useState([]);
    // API is loaded
    const [loaded, setLoaded] = useState(false);

    const setDataAPI = async (API) => 
    {   
        // One load 
        if(loaded==false)
        {
            fetch(API)
            .then((response) => response.json())
            .then((data) => setData(data),console.log(data), setLoaded(true));
        }
       
    }

   setDataAPI('./assets/data.json');
   // DATA devjob -> HTML
   const listDevjobs = data.map((devjob)=>
    <Devjob
    id = {devjob.id}
    logo = { devjob.logo }
    logoBackground= { devjob.logoBackground }
    company= { devjob.company }
    position= { devjob.position } 
    postedAt= { devjob.postedAt }
    location= { devjob.location }
    />
   );

   


    return(
    <div className="grid grid-cols-1 gap-y-12 mt-[160px] md:grid-cols-2 md:gap-x-3 xl:grid-cols-3">
        {listDevjobs}
    </div>
    )
}