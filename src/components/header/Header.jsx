import React, { useContext, useEffect } from "react";
import ButtonDarkMode from "./ButtonDarkMode";
import { ThemeContext } from "../context/ThemeContextProvider";
import { JobAPIContext } from "../context/JobAPIContextProvider";

export default function Header()
{
    const getIsFullTimeChecked = document.getElementById('fullTimeJobsChecked');

    const { theme,
           background }
           = useContext(ThemeContext);

    const {
        jobToDisplay,
        sortListJobByInputToDisplay,
        jobsInputValues,
        }
         = useContext(JobAPIContext);
    
    const getInputNameJob = (event) => 
    {
        jobsInputValues.nameJobs = event.target.value;
    }
    const getInputLocationJob = (event) => 
    {
        jobsInputValues.location = event.target.value;
    }

    const isInputFullTimeChecked = (event) => 
    {
        jobsInputValues.fullTime = event.target.checked;
    }
    
    return(

        <header className="headerBackground w-full min-w-[375px] h-[136px] bg-center bg-header-mobile bg-cover mx-auto flex flex-col justify-center items-center relative">
            <div className="w-full flex flex-row justify-between items-center p-6">
                {/* title */}
                <h1 className="devjobTitle text-[32px] font-bold text-white">DEVJOB</h1>

                 {/* dark mode */}
                <div className="w-[112px] h-[24px] flex flex-row justify-between items-center">
                    <img src="./assets/desktop/icon-sun.svg"></img>
                    <ButtonDarkMode />
                    <img src="./assets/desktop/icon-moon.svg"></img>
                </div>
            </div>

            <div className={`${theme ? background.dark.veryDarkBlue : background.light.white} absolute bottom-0 rounded-lg translate-y-[50%] w-[327px] h-[80px] p-4 shadow-md flex flex-row justify-between items-center md:w-[689px]`}>
                {/* filter by title */}
                <div className="flex flex-row justify-center items-center md:w-1/3">
                    <img id='searchPurple' src="./assets/desktop/icon-search-purple.svg" className="hidden mr-4"></img>
                    <input type='text' onChange={getInputNameJob} id='nameJobInput' name='search' placeholder="Filter by title..." className={`${theme ? background.dark.veryDarkBlue : background.light.white}`}></input>
                    <div className="w-[90px] flex flex-row justify-between items-center">
                        <img src="./assets/mobile/icon-filter.svg" className="md:hidden"></img>
                        <button className="w-[48px] h-[48px] bg-[#5964E0] rounded-lg flex justify-center items-center md:hidden">
                            <img id='search' src="./assets/desktop/icon-search.svg"></img>
                        </button>
                    </div>
                </div>
                {/* filter by location */}
                <div className="flex flex-row justify-center items-center w-1/3 hidden md:inline-flex">
                    <img src="./assets/desktop/icon-location.svg" className="mr-4"></img>
                    <input type='text' onChange={getInputLocationJob} id='locationJobInput' name='filter' placeholder="Filter by location..." className={`${theme ? background.dark.veryDarkBlue : background.light.white}`}></input>
                </div>
                {/* full time */}
                <div className="flex flex-row justify-center items-center w-1/3 hidden md:inline-flex">
                    <input type='checkbox' id='fullTimeJobsChecked' onChange={isInputFullTimeChecked} name='fullTime' className={`${theme ? 'bg-[#303742]' : 'bg-[#E8E8EA]'} w-[24px] h-[24px] mr-2`} />
                    <label htmlFor="fullTime" className={`${theme ? 'text-white' : 'text-black'} font-bold text-[16px]`}>Full Time</label>
                    <button onClick={sortListJobByInputToDisplay} id='searchButton' className="w-[80px] h-[48px] ml-4 bg-[#5964E0] text-white font-bold text-[16px] rounded-lg p-3">Search</button>
                </div>
            </div>

        </header>
        )
}