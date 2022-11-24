export default function Header()
{
    return(
        <header className="border border-1 border-red-400 w-full h-[136px] bg-header-mobile mx-auto flex flex-col justify-center items-center">
            <div className="w-full flex flex-row justify-between items-center p-6">
                {/* title */}
                <h1 className="text-[32px] font-bold text-white">devjobs</h1>

                 {/* dark mode */}
                <div className="w-[112px] h-[24px] flex flex-row justify-between items-center">
                    <img src="./assets/desktop/icon-sun.svg"></img>
                    <div className="w-[48px] h-[24px] bg-white rounded-2xl"></div>
                    <img src="./assets/desktop/icon-moon.svg"></img>
                </div>
            </div>

        </header>
        )
}