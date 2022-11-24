import Devjob from "./Devjob";
import { useState, useEffect } from "react";

export default function BodyDevjobs()
{
    useEffect(()=>{
    
    })
    // API data
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const setDataAPI = async (API) => 
    {   
        if(loaded==false)
        {
            fetch(API)
            .then((response) => response.json())
            .then((data) => setData(data),console.log(data), setLoaded(true));
        }
       
    }

   setDataAPI('./assets/data.json');
   
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
    <div className="grid grid-cols-1 gap-y-12 mt-[160px]">
        {listDevjobs}
    </div>
    )
}