import Job from "./Job";
import { useContext, useEffect, useState } from "react";
import { JobAPIContext } from "./context/JobAPIContextProvider";

export default function JobsList()
{
    const {jobToDisplay} = useContext(JobAPIContext);

    let listJobs = jobToDisplay?.map((job,id) => 
        <Job key={id}
        id = {job.id}
        logo = { job.logo }
        logoBackground = { job.logoBackground }
        company = { job.company }
        position = { job.position } 
        postedAt = { job.postedAt }
        contract = { job.contract }
        location = { job.location }
        website = {job.website}
        description = {job.description}
        requirementContent = {job.requirements.content}
        requirementItems = {job.requirements.items}
        role = {job.role}
        roleContent = {job.role.content}
        roleItems = {job.role.items}
        />
    );

    return(
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-3 xl:grid-cols-3 pt-[130px]">
            {listJobs}
        </div>
    )
}