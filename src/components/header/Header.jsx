import React, { useContext, useEffect } from "react";
import ButtonDarkMode from "./ButtonDarkMode";
import { ThemeContext } from "../context/ThemeContextProvider";
import { JobAPIContext } from "../context/JobAPIContextProvider";
import InputFilterByLocation from "../input/InputFilterByLocation";
import InputFilterByTitle from "../input/InputFilterByTitle";
import InputFullTime from "../input/InputFullTime";
import ButtonSearch from "../button/ButtonSearch";

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
        <header className="headerBackground w-full min-w-[375px] h-[136px] bg-header-mobile bg-center bg-cover mx-auto flex flex-col justify-center items-center relative">
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
                <InputFilterByTitle />
                <InputFilterByLocation />
                <InputFullTime />
            </div>

        </header>
        )
}