import { useContext } from "react";
import { JobAPIContext } from "../context/JobAPIContextProvider";
import { ThemeContext } from "../context/ThemeContextProvider";
import Button_1 from "../button/Button_1";

export default function InputFilterFullTime(){
 const { theme,
        background }
        = useContext(ThemeContext);

 const {
     jobToDisplay,
     sortListJobByInputToDisplay,
     jobsInputValues,
     }
      = useContext(JobAPIContext);

const isInputFullTimeChecked = (event) => {
    jobsInputValues.fullTime = event.target.checked;
    }

    return(
        <div className="flex flex-row justify-center items-center w-1/3 hidden md:inline-flex">
        <input type='checkbox' id='fullTimeJobsChecked' onChange={isInputFullTimeChecked} name='fullTime' className={`${theme ? 'bg-[#303742]' : 'bg-[#E8E8EA]'} w-[24px] h-[24px] mr-2`} />
        <label htmlFor="fullTime" className={`${theme ? 'text-white' : 'text-black'} font-bold text-[16px]`}>Full Time</label>
        <Button_1 css='w-[80px] h-[46px] ml-4' name={'Search'} function={sortListJobByInputToDisplay}/>
    </div>   
        )
}