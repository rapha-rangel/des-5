import React from "react";
import './AllClock.css';

const BreakTime =({isPlay, setBreakTime, breakTime, setRetorno}) =>{
    
    const minBreak = (breakTime/60);

    function handleButtonPlus(){
        if(!isPlay){
        if(breakTime < 300){
        setBreakTime(breakTime+60)
        setRetorno(false)
    }}else{}}

    function handleButtonMinuns(){
        if(!isPlay){
        if(breakTime >0){
        setBreakTime(breakTime-60)
        setRetorno(false)
        }
    }else{}}

    return(
        <div>
            <div>
            <h2 className="titulo">Soneca</h2>
            </div>
            <div className="breakTimeBox">
            <button type="button" class="btn btn-dark" onClick={handleButtonMinuns}>-</button>
            <div className="number">{minBreak.toString().padStart(2, "0")}</div>
            <button type="button" class="btn btn-dark" onClick={handleButtonPlus}>+</button>
            </div>
            
        </div>
        
    )

}


export default BreakTime;