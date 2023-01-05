import React from "react";
import './AllClock.css'

const TimeClock =({time,setTime, setTotalTime, isPlay, setRetorno})=>{

    
    function handleButtonPlus(){
        if(!isPlay){
        if(time < 30){
        setTime(time+1)
        setTotalTime(Math.floor(time*60)+60)
        setRetorno(false)
        
    }}else{}}

    function handleButtonMinuns(){
        if(!isPlay){
        if(time > 1){
        setTime(time-1)
        setTotalTime(Math.floor(time*60) - 60)
        setRetorno(false)
        console.log(isPlay)
        console.log(time)
    }}else{}}

    return(
        <div>
            <div>
            <h2 className="titulo">Tempo</h2>
            </div>
            <div className="breakTimeBox">
            <button type="button" class="btn btn-dark" onClick={handleButtonMinuns}>-</button>    
            <div className="number">{time.toString().padStart(2, "0")}</div>
            <button type="button" class="btn btn-dark" onClick={handleButtonPlus}>+</button>
            </div>
        </div>
        
    )

}

export default TimeClock;