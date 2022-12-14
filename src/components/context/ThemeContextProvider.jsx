import React, { createContext, useState } from "react";
import { useEffect } from "react";
// 1
export const ThemeContext = createContext();

const ThemeContextProvider = (props) => 
{
    const [theme, setTheme] = useState(false)
    const [scrolling, setEnableScrolling] = useState(false);

    useEffect(()=>{
      setBackgroundBodyColor();
    })

    const setBackgroundBodyColor = () => {
        if(theme){
          document.body.style.background = "#121721";
          return;
        } 
          document.body.style.background = "#FFFFFF";
    }

    const background = 
    {
        light: {
            white : 'bg-[#FFFFFF] ',
            lightGrey : 'bg-[#F4F6F8] ',
        },
        dark: {
            veryDarkBlue : 'bg-[#19202D] ',
            midnight : 'bg-[#121721] ',
            darkGrey : 'bg-[#6E8098]',
            gray : 'bg-[#9DAEC2]'
        }
    }

    const toggleTheme = () => {
        setTheme(!theme)
    }

    const enableScrolling = () => {
        if(scrolling){
          setEnableScrolling(false);
          document.body.classList.remove('stop-scrolling');
          return;
        }
        setEnableScrolling(true);
        document.body.classList.add('stop-scrolling');
        return;
      }
      
    return(
        <div className={`${theme ? background.dark.midnight : 'bg-white'} w-full min-w-[375px]`}>
            <ThemeContext.Provider value={{theme, background, toggleTheme, scrolling, enableScrolling}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
        )
}

export default ThemeContextProvider;