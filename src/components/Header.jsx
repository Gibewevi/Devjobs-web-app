import ButtonDarkMode from "./ButtonDarkMode";

export default function Header()
{
    return(
        <header className="w-full min-w-[375px] h-[136px] bg-center bg-header-mobile bg-cover mx-auto flex flex-col justify-center items-center relative">
            <div className="w-full flex flex-row justify-between items-center p-6">
                {/* title */}
                <h1 className="text-[32px] font-bold text-white">devjobs</h1>

                 {/* dark mode */}
                <div className="w-[112px] h-[24px] flex flex-row justify-between items-center">
                    <img src="./assets/desktop/icon-sun.svg"></img>
                    <ButtonDarkMode />
                    <img src="./assets/desktop/icon-moon.svg"></img>
                </div>
            </div>

            <div className="absolute bottom-0 bg-white rounded-lg translate-y-[50%] w-[327px] h-[80px] p-4 shadow-md flex flex-row justify-between items-center md:w-[689px]">
                {/* filter by title */}
                <div className="flex flex-row justify-center items-center md:w-1/3">
                    <img id='searchPurple' src="./assets/desktop/icon-search-purple.svg" className="hidden mr-4"></img>
                    <input type='text' id='search' name='search' placeholder="Filter by title..."></input>
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
                    <input type='text' id='filter' name='filter' placeholder="Filter by location..."></input>
                </div>
                {/* full time */}
                <div className="flex flex-row justify-center items-center w-1/3 hidden md:inline-flex">
                    <input type='checkbox' id='fullTime' name='fullTime' className="w-[24px] h-[24px] mr-2 " />
                    <label for="fullTime" className="font-bold text-[16px]">Full Time</label>
                    <button className="w-[80px] h-[48px] ml-4 bg-[#5964E0] text-white font-bold text-[16px] rounded-lg p-3">Search</button>
                </div>
            </div>

        </header>
        )
}