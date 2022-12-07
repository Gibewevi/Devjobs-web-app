import Job from "./Job";
import { useContext, useEffect, useState } from "react";
import { JobAPIContext } from "./context/JobAPIContextProvider";
import JobsList from "./JobsList";
import JobDetail from "./JobDetails";

export default function JobsContainer()
{
    const {jobPage} = useContext(JobAPIContext);
    const {jobToDisplay} = useContext(JobAPIContext);

    const renderSwitchByJobComponent = (jobPage) => {
      switch(jobPage) {
        case 0:
          return <JobsList />;
        case 1:
          return <JobDetail />;
      }
    }

    let listJobs = jobToDisplay?.map((job,id) => 
        <Job key={id}
        id = {job.id}
        logo = { job.logo }
        logoBackground = { job.logoBackground }
        company = { job.company }
        position = { job.position } 
        postedAt = { job.postedAt }
        location = { job.location }
        website = {job.website}
        requirementContent = {job.requirements.content}
        requirementItems = {job.requirements.items}
        role = {job.role}
        roleContent = {job.role.content}
        roleItems = {job.role.items}
        />
    );

    return(
        <div className='min-w-[375px] flex justify-center mx-auto'>
          {renderSwitchByJobComponent(jobPage)}
        </div>
    )
}