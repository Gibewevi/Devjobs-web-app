import { useContext } from "react";
import { JobAPIContext } from "./context/JobAPIContextProvider";
import { ThemeContext } from "./context/ThemeContextProvider";
import H2Text from "./H2Text";
import Button_1 from "./button/Button_1";
import Button_2 from "./button/Button_2";

export default function JobDetail(){
    const { theme,
        background }
        = useContext(ThemeContext);

    const {
        jobToDisplay,
        jobByID,
        changePageByJobClick
        }
        = useContext(JobAPIContext);

        let color = jobByID.logoBackground;

        let requirementContent = jobByID.requirementItems.map((content, index) =>
        <div key={index} className="mt-3 flex flex-row">
            <span className="mr-7 text-[#5964E0]">●</span>
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
            <div className={`w-full flex flex-col justify-center items-center`}>
                <div className={`min-w-[327px] max-w-[327px] h-full mx-auto -translate-y-[25px] flex flex-col justify-center items-center md:min-w-[689px] lg:min-w-[730px]`}>
                    <div className={`${theme ? background.dark.veryDarkBlue : background.light.white} w-full h-[230px] shadow-lg rounded-lg flex flex-col justify-center items-center relative md:max-h-[140px] md:min-w-[689px] md:flex-row md:justify-start md:pr-8`}>
                        {/* Header icon */}
                        <div style={{backgroundColor:color}} className="w-[60px] h-[60px] flex justify-center items-center rounded-2xl absolute top-0 -translate-y-[50%] md:relative md:w-[140px] md:h-full md:translate-y-0 md:rounded-none">
                            <img src={jobByID.logo} className='w-[35px] md:w-[70px]'/>
                        </div>
                        <div className="flex flex-col justify-center items-center  md:items-start md:pl-8 md:grow md:justify-center">
                            <h1 className={`${theme ? 'text-white' : 'text-black'} font-bold text-2xl mt-4 md:mt-0`}>{jobByID.company}</h1>
                            <h1 className="font-normal text-lg text-[#6E8098] mt-2">{jobByID.website}</h1>
                        </div>

                        <div className="flex justify-center items-center mt-7 md:mt-0">
                            <Button_2 href={jobByID.website}  css='w-[147px] h-[48px]' name='Company Site'/>
                        </div>
                    </div>

                    <div className={`${theme ? background.dark.veryDarkBlue : background.light.white} w-full h-full shadow-lg rounded-lg flex flex-col justify-center mt-7 p-8 gap-y-10`}>
                        <Button_2 name='Previous' function={()=>changePageByJobClick(0)}/>
                        <div className="flex flex-col w-full md:flex-row md:items-center md:justify-between">
                            <div className="flex flex-col gap-y-1 md:gap-y-3">
                                <h2 className="text-[#6E8098] text-md font-normal">{jobByID.postedAt+' · '+jobByID.contract}</h2>
                                <H2Text name={jobByID.position} css='text-lg font-bold' md='md:text-[28px]' colorLight='text-slate-900' colorDark='text-slate-200'/>
                                <h3 className="text-[#5964E0] font-bold text-sm">{jobByID.location}</h3>
                            </div>

                            <div className="flex justify-center items-center">
                                <Button_1 css='w-full mt-10' md='md:mt-0' width='w-full' name='Apply Now'/>
                            </div>

                        </div>

                        <div className="w-full">
                            <h1 className="text-[#6E8098]">{jobByID.description}</h1>
                        </div>

                        <div className="w-full">
                            <H2Text name='Requirements' css='text-[20px] font-bold' colorLight='text-slate-900' colorDark='text-slate-200'/>
                            <h1 className="text-[#6E8098] mt-6">{jobByID.requirementContent}</h1>
                        </div>
                        <div className="w-full">
                            {requirementContent}
                        </div>

                        <div className="flex flex-col gap-y-3">
                        <H2Text name='What You Will Do' css='text-xl font-bold' colorLight='text-slate-900' colorDark='text-slate-200'/> 
                        <span className="text-[#6E8098]">{jobByID.roleContent}</span>
                        {requirementItem}
                        </div>
                    </div>
                </div>

                <div className={`${theme ? background.dark.veryDarkBlue : background.light.white} w-full h-[96px] md:flex md:justify-center md:items-center`}>
                    <div className="w-full h-full flex justify-center items-center shadow-lg md:justify-between md:p-8 md:max-w-[768px]">
                        <div className="hidden md:inline-block">
                            <H2Text name={jobByID.position} css='text-[20px] font-bold' colorLight='text-slate-900' colorDark='text-slate-200'/>
                            <span className="text-[#6E8098] text-[16px]">So Digital Inc.</span>
                        </div>
                        <div className="w-[327px] md:w-[141px]">
                            <Button_1 css='w-full' name='Apply Now'/>
                        </div>
                    </div>
                </div>
            </div>
        )
}