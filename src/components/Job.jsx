import { useContext } from "react";
import { JobAPIContext } from "./context/JobAPIContextProvider";
import { ThemeContext } from "./context/ThemeContextProvider";

export default function Job(props)
{
    
    let color = props.logoBackground;
    const {
        theme, 
        background} 
        = useContext(ThemeContext);

    const {
        clickOnThumbnailJob
        }
        = useContext(JobAPIContext);

return(
    <div onClick={() => clickOnThumbnailJob(props)} className={`${theme ? background.dark.veryDarkBlue : background.light.white} min-w-[327px] w-[339px] h-[253px] flex flex-col justify-between shadow-xl rounded-lg p-8 relative`}>
        {/* Header icon */}
        <div style={{backgroundColor:color}} className="w-[50px] h-[50px] flex justify-center items-center rounded-2xl absolute top-0 -translate-y-[50%]">
            <img src={props.logo} className='w-[25px]'/>
        </div>
        {/* details */}
        <div className={` ${theme ? 'text-slate-100' : 'text-slate-900'} flex flex-col justify-center gap-y-3 mt-5 text-slate-900`}>
            <span className="font-normal text-[16px] text-slate-500">{props.postedAt}</span>
            <span className={`${theme ? 'text-slate-100' : 'text-slate-900'} font-bold text-[20px]`}>{props.position}</span>
            <span className="font-normal text-[16px] text-slate-500">{props.company}</span>
        </div>
         {/* locate */}
        <span className="text-[14px] text-[#5964E0] font-bold">{props.location}</span>
    </div>
    )
}