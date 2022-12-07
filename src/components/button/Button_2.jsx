import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContextProvider"

export default function Button_1(props){

    const {theme, background} = useContext(ThemeContext);
    const [color, setColor] = useState('bg-[#EFF0FC]');
    const [colorHover, setColorHover] = useState('hover:bg-[#303642]');

useEffect(()=>{
    colorDarkMode();
})
    const colorDarkMode = () => {
        if(theme){
            setColor('bg-[#303642]');
            setColorHover('hover:bg-[#696E76]')
            return;
        }
        setColor('bg-[#EFF0FC]');
        setColorHover('hover:bg-[#C5C9F4]')
        return;
    }

    return(
        <a href={props.href}>
            <button onClick={props.function} className={`button_2 ${color} ${props.css} ${props.sm} ${props.md} ${props.lg} ${props.xl} ${colorHover} flex justify-center items-center hover:bg-[#C5C9F4] text-[#5964E0] font-bold text-[16px] rounded-lg p-3`}>{props.name}</button>
        </a>
        )
}