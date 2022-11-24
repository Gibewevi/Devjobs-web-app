export default function Devjob(props)
{
    let color = props.logoBackground;
  
return(
    <div className="w-[339px] h-[253px] flex flex-col justify-between bg-white border border-[0.2px] border-slate-200 shadow-xl rounded-lg p-8 relative">
        {/* Header icon */}
        <div style={{backgroundColor:color}} className="w-[50px] h-[50px] flex justify-center items-center rounded-2xl absolute top-0 -translate-y-[50%]">
            <img src={props.logo}/>
        </div>
        {/* details */}
        <div className="flex flex-col justify-center gap-y-3 mt-5">
            <span className="font-light text-[16px] text-slate-900">{props.postedAt}</span>
            <span className="font-bold text-[20px] text-slate-900">{props.position}</span>
            <span className="font-light text-[16px] text-slate-900">{props.company}</span>
        </div>
         {/* locate */}
        <span className="text-[14px] text-[#5964E0] font-bold">{props.location}</span>
    </div>
    )
}