import { useState } from "react"

const useTimer = (initialTime=20)=>{
    const [time, setTime]= useState(initialTime)
    const decrement = ()=>{
        setTime((prev)=>prev-1)
        if(time>0){decrement();}
    }
        const reset = ()=>{setTime(initialTime)}
    return [time, decrement, reset];
}
export default useTimer;