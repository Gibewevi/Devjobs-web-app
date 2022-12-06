import { JobAPIContext } from "./context/JobAPIContextProvider";
import { ThemeContext } from "./context/ThemeContextProvider";
import { useContext } from "react";

export default function JobDetail(){
    const { theme,
        background }
        = useContext(ThemeContext);

    const {
        jobToDisplay,
        jobByID
        }
        = useContext(JobAPIContext);

        let color = jobByID.logoBackground;

        let requirementContent = jobByID.requirementItems.map((content, index) =>
        <div key={index} className="mt-3 flex flex-row">
            <span className="mr-4">·</span>
            <span className="text-[#6E8098]">{content}</span>
        </div>
        );

        let requirementItem = jobByID.roleItems.map((item, index) =>
        <div key={index} className="mt-3 flex flex-row">
            <span className="mr-4 font-semibold text-[#5964E0]">{index+1}</span>
            <span className="text-[#6E8098]">{item}</span>
        </div>
        );
    return(
        // <div className={`${theme ? background.dark.veryDarkBlue : background.light.white} ${jobPage==0 ? 'block' : 'hidden'} absolute`}>
            <div className={`min-w-[327px] max-w-[327px] h-full mx-auto flex flex-col justify-center items-center`}>
                <div className={`${theme ? background.dark.veryDarkBlue : background.light.white} w-full h-[230px] shadow-lg rounded-lg flex flex-col justify-center items-center relative`}>
                    {/* Header icon */}
                    <div style={{backgroundColor:color}} className="w-[60px] h-[60px] flex justify-center items-center rounded-2xl absolute top-0 -translate-y-[50%]">
                        <img src={jobByID.logo} className='w-[35px]'/>
                    </div>

                    <h1 className={`${theme ? 'text-white' : 'text-black'} font-bold text-2xl mt-4`}>{jobByID.company}</h1>
                    <h1 className="font-normal text-lg text-[#6E8098] mt-2">{jobByID.website}</h1>
                    <a href={jobByID.website} className={`${theme ? 'bg-[#303642]' : 'bg-[#EFF0FC]'} p-4 bg-[#EFF0FC] text-md rounded-lg font-bold text-[#5964E0] mt-8`}>Company Site</a>
                </div>

                <div className={`${theme ? background.dark.veryDarkBlue : background.light.white} w-full h-full shadow-lg rounded-lg flex flex-col justify-center mt-7 p-8 gap-y-10`}>
                    <div className="flex flex-col gap-y-1 w-full">
                        <span className="text-[#6E8098] text-md font-normal">{jobByID.postedAt+' · '+jobByID.contract}</span>
                        <h2 className="text-slate-900 font-bold text-lg">{jobByID.position}</h2>
                        <h3 className="text-[#5964E0] font-bold text-sm">{jobByID.location}</h3>
                    </div>
                    <button className="w-full h-[48px] bg-[#5964E0] rounded-lg text-white font-bold flex justify-center items-center">Apply Now</button>
                    
                    <div className="w-full">
                        <h1 className="text-[#6E8098]">{jobByID.description}</h1>
                    </div>

                    <div className="w-full">
                        <h1 className="text-slate-900 font-bold mb-4">Requirements</h1>
                        <h1 className="text-[#6E8098]">{jobByID.requirementContent}</h1>
                    </div>
                    <div className="w-full">
                        {requirementContent}
                    </div>

                    <div className="flex flex-col gap-y-3">
                       <h4 className="font-bold text-slate-900 text-xl">What You Will Do</h4>
                       <span className="text-[#6E8098]">{jobByID.roleContent}</span>
                       {requirementItem}
                    </div>
                </div>

                <div className={`${theme ? background.dark.veryDarkBlue : background.light.white}  w-full h-[96px] p-8 shadow-lg rounded-lg mt-5`}>
                    <button className="bg-[#5964E0] w-full h-[48px] rounded-lg font-semibold text-white">Apply Now</button>
                </div>
            </div>
        )
}