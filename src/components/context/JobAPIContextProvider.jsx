import React, { createContext, useState } from "react";
export const JobAPIContext = createContext();

const JobAPIContextProvider = (props) => {

    const fetchAPI = (StringfileName)=> 
    {
        if(!isFetch)
        {
            fetch(StringfileName).then(function(response) {
                response.json().then(function(API) {    
                    SetjobToBeSorted(API);setIsFetch(true)});
            });
        }
    }

// Jobs API à afficher
const [isFetch, setIsFetch] = useState(false);
const [jobToDisplay, setJobToDisplay] = useState(fetchAPI('./assets/data.json'));
const [jobToBeSorted, SetjobToBeSorted] = useState(fetchAPI('./assets/data.json'));

let jobsInputValues = 
{
    nameJobs : null,
    location : null,
    fullTime : false,
}


    const sortListJobByName = (listJob) => 
    {

        let nameJobs = jobsInputValues.nameJobs.toLowerCase().split(' ');
        let findJobsInListJob = false;
        let listJobByName = [];

        listJob.forEach(job => {
            let jobSplitCaseToLower = job.position.toLowerCase().split(' ');

            nameJobs.forEach(nameJob => {
                if(jobSplitCaseToLower.includes(nameJob) && !findJobsInListJob)
                {
                    listJobByName.push(job);
                    console.log('--------- DEBUG ---------');
                    console.log('nameJob '+nameJob);
                    console.log('jobSplitCaseToLower.includes(nameJob) '+jobSplitCaseToLower);
                    findJobsInListJob = true;
                }
            });
            findJobsInListJob = false;
        });
        return listJobByName;
    }            
    const sortListJobByLocation = (listJobs) => 
    {
        let InputLocationToLowerCase = jobsInputValues.location.toLowerCase();
        let listJobByLocation = [];
        listJobs.forEach((element) => {
           if(element.location.toLowerCase().includes(InputLocationToLowerCase))
           {
                listJobByLocation.push(element);
           }
        });
        return listJobByLocation;
    }
    const locationIsEmpty = () => 
    {
        if(jobsInputValues.location != null) {return false}
        else {return true}
    }
    const fullTimeIsChecked = () => 
    {
        return jobsInputValues.fullTime;
    }
    const nameJobsIsEmpty = () => 
    {
        if(jobsInputValues.nameJobs != null){return false} 
        else{return true}
    }

    const sortListByFullTimeJobs = () => 
    {
        return jobToBeSorted.filter(job => job.contract === 'Full Time');
    }

    const sortListByAllTimeJobs = () => 
    {
        return jobToBeSorted;
    }

    const sortListJobByInputToDisplay = () => 
    {
        let listJobs; 
        if(fullTimeIsChecked())
        {
            listJobs = sortListByFullTimeJobs();
            if(!locationIsEmpty())
            {
                listJobs = sortListJobByLocation(listJobs);
                if(nameJobsIsEmpty())
                {
                    setJobToDisplay(listJobs);
                }
                else if(!nameJobsIsEmpty())
                {
                    setJobToDisplay(listJobs);
                }
            } else if(locationIsEmpty())
            {
                if(nameJobsIsEmpty())
                {
                    setJobToDisplay(listJobs);
                }
                else if(!nameJobsIsEmpty())
                {

                    listJobs = sortListJobByName(listJobs);
                    setJobToDisplay(listJobs);
                }
            }
        }

        else if(!fullTimeIsChecked())
        {
                listJobs = sortListByAllTimeJobs();  
            if(!locationIsEmpty())
            {
                listJobs = sortListJobByLocation(listJobs);
                if(nameJobsIsEmpty())
                {
                setJobToDisplay(listJobs);
                }
                else if(!nameJobsIsEmpty())
                {
                    listJobs = sortListJobByName(listJobs);
                    setJobToDisplay(listJobs);
                }
            }
        }
    }
    
return(
        <JobAPIContext.Provider value = {{jobToDisplay, jobsInputValues, sortListJobByInputToDisplay}}>
            {props.children}
        </JobAPIContext.Provider>
    )
}

export default JobAPIContextProvider;