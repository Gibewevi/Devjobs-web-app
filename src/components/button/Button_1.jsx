export default function Button_1(props){
    return(
        <button onClick={props.function} className={`${props.css} ${props.sm} ${props.md} ${props.lg} ${props.xl} flex justify-center items-center bg-[#5964E0] hover:bg-[#939BF4] text-white font-bold text-[16px] rounded-lg p-3`}>{props.name}</button>
        )
}