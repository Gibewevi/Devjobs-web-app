import { useContext } from "react"
import { useState, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContextProvider"

export default function H2Text(props){
    const {theme, background} = useContext(ThemeContext);
    const [color, setColor] = useState(props.colorLight);

useEffect(()=>{
    colorDarkMode();
})
    const colorDarkMode = () => {
        if(theme){
            setColor(props.colorDark);
            return;
        }
        setColor(props.colorLight);
        return;
    }

    return(
            <h2 className={`${color} ${props.css} ${props.md} ${props.lg} ${props.xl}`}>{props.name}</h2>
        )
}