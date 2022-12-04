import { useContext } from "react";
import { JobAPIContext } from "../context/JobAPIContextProvider";
import { ThemeContext } from "../context/ThemeContextProvider";

export default function InputFilterByLocation(){
  const {
    jobsInputValues,
    }
     = useContext(JobAPIContext);

  const { theme,
    background }
    = useContext(ThemeContext);

  const getInputLocationJob = (event) => 
  {
      jobsInputValues.location = event.target.value;
  }
    return(
            <div className="flex flex-row justify-center items-center w-1/3 hidden md:inline-flex">
              <img src="./assets/desktop/icon-location.svg" className="mr-4"></img>
              <input type='text' onChange={getInputLocationJob} id='locationJobInput' name='filter' placeholder="Filter by location..." className={`${theme ? background.dark.veryDarkBlue : background.light.white}`}></input>
            </div>        
        )
}