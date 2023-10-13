import  {useEffect, useState} from "react";
import {TypedProps} from '../../interfaces/type'


//https://blog.logrocket.com/3-ways-implement-typing-animation-react/

export default function Typed({text,delay,infinite}:TypedProps){

    const [currentText,setCurrentText] = useState<string>('')
    const [currentIndex,setCurrentIndex] = useState<number>(0)

    useEffect(()=>{
        let timer:number;

        if(currentIndex <= text.length){
            timer = setTimeout(()=>{
                setCurrentText((prevText)=> prevText + text[currentIndex]);
                setCurrentIndex((prevIndex)=>prevIndex +1);
            }, delay) 
        }else if (infinite){
            setCurrentIndex(0);
            setCurrentText('');
        }
        return () => clearTimeout(timer)
    },[currentIndex,text,delay])

    return <span> {currentText}</span>
}