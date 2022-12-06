import { useContext } from "react";
import { JobAPIContext } from "../context/JobAPIContextProvider";
import { ThemeContext } from "../context/ThemeContextProvider";

export default function InputFilterByLocation(){
   
 const { theme,
        background,
        enableScrolling }
        = useContext(ThemeContext);

 const {
     jobsInputValues,
     sortListJobByInputToDisplay, 
     setPopMobileFilter
     }
      = useContext(JobAPIContext);

const getInputNameJob = (event) => {
    jobsInputValues.nameJobs = event.target.value;
    }

const LockBackgroundAndSortListByInput = () => {
    enableScrolling();
    setPopMobileFilter();
}

    return(
        <div className="flex flex-row justify-center items-center md:w-1/3">
            <img id='searchPurple' src="./assets/desktop/icon-search-purple.svg" className="hidden mr-4"></img>
            <input type='text' onChange={getInputNameJob} id='nameJobInput' name='search' placeholder="Filter by title..." className={`${theme ? background.dark.veryDarkBlue : background.light.white}`}></input>

            <div className="w-[90px] flex flex-row justify-between items-center">
                <img src="./assets/mobile/icon-filter.svg" onClick={LockBackgroundAndSortListByInput} className="md:hidden"></img>
                <button onClick={sortListJobByInputToDisplay} className="w-[48px] h-[48px] bg-[#5964E0] rounded-lg flex justify-center items-center md:hidden">
                    <img id='search' src="./assets/desktop/icon-search.svg"></img>
                </button>
            </div>
        </div>     
        )
}