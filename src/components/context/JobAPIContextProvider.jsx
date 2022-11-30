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
const [jobToDisplay, setJobToDisplay] = useState([]);
const [jobToBeSorted, SetjobToBeSorted] = useState(fetchAPI('./assets/data.json'));

let jobsInputValues = 
{
    nameJobs : null,
    location : null,
    fullTime : false,
}

// parcourir les données de l'API
    //-> Si le champ FullTime est renseigné
        //{
            //-> retourne les jobs en fonction des valeurs inputs Fulltime
                //> vérifie les données inputs renseignés et retourne les jobs
        //}
    //-> Si le champ FullTime n'est pas renseigné
            //-> retourne les jobs en fonction des valeurs inputs FullTime
                //> vérifie les données inputs renseignés et retourne les jobs



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
                    findJobsInListJob = true;
                }
            });
        });
        return listJobByName;
    }            
    const sortListJobByLocation = () => 
    {
        let InputLocationToLowerCase = jobsInputValues.location.toLowerCase();
        let listJobByLocation = [];
        jobToBeSorted.forEach((element) => {
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

    const sortListByPartTimeJobs = () => 
    {
        return jobToBeSorted.filter(job => job.contract != 'Full Time');
    }

    const sortListJobByInputToDisplay = () => 
    {
        let listJobs; 
        // si fulltime 
        if(fullTimeIsChecked())
        {
            listJobs = sortListByFullTimeJobs();
            // si location est renseigné
            if(!locationIsEmpty())
            {
                listJobs = sortListJobByLocation();
                // si name est vide
                if(nameJobsIsEmpty())
                {
                    console.log(listJobs);
                    return listJobs;
                }
                // si name est renseigné
                else if(!nameJobsIsEmpty())
                {

                    listJobs = sortListJobByName(listJobs);
                    console.log(listJobs);
                    return listJobs;
                }
            } else if(locationIsEmpty())
            {
                if(nameJobsIsEmpty())
                {
                    console.log(listJobs);
                    return listJobs;
                }
                // si name est renseigné
                else if(!nameJobsIsEmpty())
                {

                    listJobs = sortListJobByName(listJobs);
                    console.log(listJobs);
                    return listJobs;
                }
            }
        }

        else if(!fullTimeIsChecked())
        {
                listJobs = sortListByPartTimeJobs();  
                console.log(listJobs);
            if(!locationIsEmpty())
            {
                listJobs = sortListJobByLocation();
                console.log(listJobs);
                if(nameJobsIsEmpty)
                {
                console.log(listJobs);
                return listJobs;
                }
                else if(!nameJobsIsEmpty())
                {
                    listJobs = sortListJobByName(listJobs);
                    console.log(listJobs);
                    return listJobs;
                }
            }
            else 
            {
                listJobs = jobToBeSorted;
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