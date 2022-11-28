import { Component, ReactDOM, useEffect, useState, useContext } from "react";
import { createPortal } from "react-dom";
import { ThemeContext } from "../context/ThemeContextProvider";

export default function ButtonDarkMode() 
{
    const [on, setOn] = useState(false);
    const {theme, toggleTheme} = useContext(ThemeContext);
    
    const textclick = () => {
        toggleTheme();
        if(theme)
        {
            let circle = document.getElementById('circle');
            circle.style.transform='translateX(0px)';
            setOn(false);
        }
        else
        {
            let circle = document.getElementById('circle');
            circle.style.transform='translateX(25px)';
            setOn(true);
        }
    }

    return(
        <div onClick={textclick} id="buttondarkmode" className="w-[48px] h-[24px] bg-white rounded-2xl flex items-center p-1">
            <div id='circle' className="rounded-full ">
            </div>
        </div>
        )
}