import { JobAPIContext } from "../context/JobAPIContextProvider";
import { useContext } from "react";

export default function ButtonSearch(){
    const {
        sortListJobByInputToDisplay,
        }
         = useContext(JobAPIContext);

    return(
        <button onClick={sortListJobByInputToDisplay} id='searchButton' className="w-[80px] h-[48px] ml-4 bg-[#5964E0] text-white font-bold text-[16px] rounded-lg p-3">Search</button>
        )
}