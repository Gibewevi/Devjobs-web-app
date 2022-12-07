import React, { createContext, useState } from "react";
import { useEffect } from "react";
export const JobAPIContext = createContext();

const JobAPIContextProvider = (props) => {

  const fetchAPI = (StringfileName) => {
    if (!isFetch) {
      fetch(StringfileName)
        .then(async response => {
          const API = await response.json();
  
          SetjobToBeSorted(API);
          setIsFetch(true);
      });
    }
  }

  // Jobs API à afficher
  const [isFetch, setIsFetch] = useState(false);
  const [jobToDisplay, setJobToDisplay] = useState();
  const [MobileFilter, setMobileFilter] = useState(false);
  const [jobToBeSorted, SetjobToBeSorted] = useState(fetchAPI('./assets/data.json'));

  const [jobPage, setJobPage] = useState(0);
  const [jobByID, setJobByID] = useState();

  let jobsInputValues =
  {
    nameJobs: null,
    location: null,
    fullTime: false,
  }


  const loadJobByIDOnClick = (job) => {
    setJobByID(job);
  }

  const changePageByJobClick = (val) => {
    setJobPage(val);
  } 

  const clickOnThumbnailJob = (job) => {
    loadJobByIDOnClick(job);
    changePageByJobClick(1);
  }

  const setPopMobileFilter = () => {
    setMobileFilter(MobileFilter ? false : true);
  };


  const sortListJobByInputToDisplay = () => {
    let listJobs = fullTimeIsChecked() ? sortListByFullTimeJobs() : sortListByAllTimeJobs();

    if (!locationIsEmpty()) {
      listJobs = sortListJobByLocation(listJobs);
    }
  
    if (!nameJobsIsEmpty()) {
      listJobs = sortListJobByName(listJobs);
    }
  
    setJobToDisplay(listJobs);
    resetJobsInputValues();
  }

  const fullTimeIsChecked = () => {
    return jobsInputValues.fullTime;
  }
  const sortListByAllTimeJobs = () => {
    return jobToBeSorted;
  }

  const sortListByFullTimeJobs = () => {
    return jobToBeSorted.filter(job => job.contract === 'Full Time');
  }
  const locationIsEmpty = () => {
    return !Boolean(jobsInputValues.location);
  }

  const sortListJobByLocation = (listJobs) => {
    let InputLocationToLowerCase = jobsInputValues.location.toLowerCase();
    let listJobByLocation = listJobs.filter((job) => {
      return job.location.toLowerCase().includes(InputLocationToLowerCase);
    });
    return listJobByLocation;
  }
  
  const nameJobsIsEmpty = () => {
    return !Boolean(jobsInputValues.nameJobs);
  }

  const sortListJobByName = (listJob) => {

    let nameJobs = jobsInputValues.nameJobs.toLowerCase().split(' ');
    let findJobsInListJob = false;
    let listJobByName = [];

    listJob.forEach(job => {
      let jobSplitCaseToLower = job.position.toLowerCase().split(' ');

      nameJobs.forEach(nameJob => {
        if (jobSplitCaseToLower.includes(nameJob) && !findJobsInListJob) {
          listJobByName.push(job);
          findJobsInListJob = true;
        }
      });

      findJobsInListJob = false;
    });
    return listJobByName;
  }

  const resetJobsInputValues = () => {
    jobsInputValues.nameJobs = null;
    jobsInputValues.location = null;
    document.getElementById('nameJobInput').value = null;
    document.getElementById('locationJobInput').value = null;
    document.getElementById('fullTimeJobsChecked').checked = false;
  }

  return (
    <JobAPIContext.Provider value={{ jobToDisplay,
     jobsInputValues,
      sortListJobByInputToDisplay,
      setPopMobileFilter,
      MobileFilter,
      loadJobByIDOnClick,
      clickOnThumbnailJob,
      jobPage,
      jobByID,
      changePageByJobClick }}>

      {props.children}

    </JobAPIContext.Provider>
  )
}

export default JobAPIContextProvider;