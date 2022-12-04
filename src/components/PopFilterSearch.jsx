import { useContext } from "react";
import InputFilterByLocation from "./input/InputFilterByLocation";
import { JobAPIContext } from "./context/JobAPIContextProvider";
import { ThemeContext } from "./context/ThemeContextProvider";

export default function PopFilterSearch(){

  const {
    jobsInputValues,
    sortListJobByInputToDisplay,
    MobileFilter,setPopMobileFilter
    }
     = useContext(JobAPIContext);

  const getInputLocationJob = (event) => 
  {
      jobsInputValues.location = event.target.value;
  }

  const isInputFullTimeChecked = (event) => {
    jobsInputValues.fullTime = event.target.checked;
  }

  const buttonMobileSearchonClick = () => {
    sortListJobByInputToDisplay();
    setPopMobileFilter();
  }

  if (MobileFilter) {
      return(
          <div className="z-20 w-[327px] h-[217px] rounded-lg border border-1 border-slate-200 bg-white shadow-lg absolute left-0 right-0 ml-auto mr-auto top-[250px] flex flex-col justify-center items-center md:invisible">
            <div className="flex flex-row w-full p-4">
              <img src='.\public\assets\desktop\icon-location.svg' className="mr-4"></img>
              <input type='text' onChange={getInputLocationJob} id='InputMobileFilter' name='InputMobileFilter' placeholder="Filter by location..." className=""></input>
            </div>

            <hr className="w-full h-[1px] bg-slate-200 mt-1"></hr>

            <div className="flex flex-row w-full p-4">
              <input type='checkbox' onChange={isInputFullTimeChecked} id='fullTimeJobsChecked' name='fullTime' className= "w-[24px] h-[24px] mr-2"/>
              <label htmlFor="fullTime" className="font-bold text-[16px]">Full Time</label>
            </div>

            <div className="w-full p-4">
              <button id='searchButton' onClick={buttonMobileSearchonClick} className="w-full h-[48px] bg-[#5964E0] text-white font-bold text-[16px] rounded-lg p-4">Search</button>
            </div>
          </div>
    )
  } return null;


}