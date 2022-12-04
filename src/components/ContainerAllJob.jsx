import Job from "./Job";
import { useContext, useEffect, useState } from "react";
import { JobAPIContext } from "./context/JobAPIContextProvider";

export default function ContainerAllJob()
{

    const {jobToDisplay} = useContext(JobAPIContext);
    useEffect(()=>{
    // console.log(jobToDisplay);
    },[jobToDisplay]);

    let listJobs = jobToDisplay?.map((job,id) => 
        <Job key={id}
        id = {job.id}
        logo = { job.logo }
        logoBackground= { job.logoBackground }
        company= { job.company }
        position= { job.position } 
        postedAt= { job.postedAt }
        location= { job.location }
        />
    );




    return(
    <div className="h-[full-136px] grid grid-cols-1 gap-y-12 mt-[160px] md:grid-cols-2 md:gap-x-3 xl:grid-cols-3">
        {listJobs}
    </div>
    )
}