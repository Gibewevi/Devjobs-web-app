import React, { createContext, useState } from "react";
export const JobAPIContext = createContext();

const JobAPIContextProvider = (props) => {

  const fetchAPI = (StringfileName) => {
    if (!isFetch) {
      fetch(StringfileName).then(function (response) {
        response.json().then(function (API) {
          SetjobToBeSorted(API); setIsFetch(true)
        });
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
    if(MobileFilter){
      setMobileFilter(false);
      return;
    }
    setMobileFilter(true);
  }


  let jobsInputValues =
  {
    nameJobs: null,
    location: null,
    fullTime: false,
  }

  const sortListJobByInputToDisplay = () => {
    let listJobs;

    if (fullTimeIsChecked()) {
      listJobs = sortListByFullTimeJobs();
      if (!locationIsEmpty()) {
        listJobs = sortListJobByLocation(listJobs);
        if (nameJobsIsEmpty()) {
          setJobToDisplay(listJobs);
        }
        else if (!nameJobsIsEmpty()) {
          setJobToDisplay(listJobs);
        }
      } else if (locationIsEmpty()) {
        if (nameJobsIsEmpty()) {
          setJobToDisplay(listJobs);
        }
        else if (!nameJobsIsEmpty()) {
          listJobs = sortListJobByName(listJobs);
          setJobToDisplay(listJobs);
        }
      }
    }

    else if (!fullTimeIsChecked()) {
      listJobs = sortListByAllTimeJobs();
      if (!locationIsEmpty()) {
        listJobs = sortListJobByLocation(listJobs);
        if (nameJobsIsEmpty()) {
          setJobToDisplay(listJobs);
        }
        else if (!nameJobsIsEmpty()) {
          listJobs = sortListJobByName(listJobs);
          setJobToDisplay(listJobs);
        }
      } else if (locationIsEmpty()) {
        if (nameJobsIsEmpty()) {
          setJobToDisplay(listJobs);
        }
        else if (!nameJobsIsEmpty()) {
          listJobs = sortListJobByName(listJobs);
          setJobToDisplay(listJobs);
        }
      }
    }
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
    if (jobsInputValues.location != null) { return false }
    else { return true }
  }
  const sortListJobByLocation = (listJobs) => {
    let InputLocationToLowerCase = jobsInputValues.location.toLowerCase();
    let listJobByLocation = [];
    listJobs.forEach((element) => {
      if (element.location.toLowerCase().includes(InputLocationToLowerCase)) {
        listJobByLocation.push(element);
      }
    });
    return listJobByLocation;
  }
  const nameJobsIsEmpty = () => {
    if (jobsInputValues.nameJobs != null) {
      return false
    }
    else {
      return true
    }
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
    jobsInputValues =
    {
      nameJobs: null,
      location: null,
    }
    let nameJobInput = document.getElementById('nameJobInput').value = null;
    let locationJobInput = document.getElementById('locationJobInput').value = null;
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