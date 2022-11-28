import Job from "./Job";
import { useContext, useState } from "react";
import { JobAPIContext } from "./context/JobAPIContextProvider";

export default function ContainerAllJob()
{
   const {jobToDisplay} = useContext(JobAPIContext);
 

    const listJobs = jobToDisplay.map((Job)=>
     <Job
     id = {Job.id}
     logo = { Job.logo }
     logoBackground= { Job.logoBackground }
     company= { Job.company }
     position= { Job.position } 
     postedAt= { Job.postedAt }
     location= { Job.location }
     />
    );

   


    return(
    <div className="grid grid-cols-1 gap-y-12 mt-[160px] md:grid-cols-2 md:gap-x-3 xl:grid-cols-3">
        {listJobs}
    </div>
    )
}