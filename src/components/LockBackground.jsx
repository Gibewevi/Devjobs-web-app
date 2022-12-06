import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContextProvider";

export default function LockBackground(props){
    const {
        scrolling }
        = useContext(ThemeContext);
return(
    <div id='opacityByLock' className={`${scrolling ? 'block' : 'hidden'} z-30 w-full h-[100%] absolute top-0`}>
        {props.children}
    </div>
    )
}