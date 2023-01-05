import React from "react";
import { useState, useEffect } from "react";
import './AllClock.css'
const Clock = ({setBreakTime, setTime, isPlay, setIsPlay, breakTime, totalTime, setTotalTime, retorno, setRetorno})=> {

    const [breakRun, setBreakRun] = useState(false);
    const [breakTimeRun, setBreakTimeRun] =useState(false);

    const min = Math.floor(totalTime /60);
    const seg = (totalTime % 60);
    
    function handlePlay(){
        if(!isPlay){
            setIsPlay(true)
            setRetorno(false)
            setRetorno(false)
        }
        console.log(isPlay)
    }

    function handlePause(){
        if(isPlay){
            setIsPlay(false)
            setRetorno(false)
        }
        console.log(isPlay)
    }
    
    function handleDefault(){
        setBreakTimeRun(false)
        setIsPlay(false)
        setBreakTime(300)
        setBreakRun(false)
        setTotalTime(25*60)
        setTime(25)
        setIsPlay(false)
        setRetorno(true)
            console.log(retorno)
    }
    
    
    useEffect(()=>{
        if(retorno){
            setTotalTime(25*60)
        }
        else if(totalTime >0 && totalTime <= 60 && isPlay && !breakTimeRun){
            setTimeout(() =>{
                setTotalTime(totalTime-1)
                setBreakTimeRun(true)
            }, 1000)
        }else if(totalTime === 0 && !breakRun && isPlay && breakTimeRun){
            setTimeout(()=>{
            setBreakRun(true)
            setTotalTime(breakTime)
            setBreakTimeRun(false)
            }, 5000)
        }else if(totalTime === 0 && breakRun && isPlay){
            setTotalTime(0)
            setIsPlay(false)
        }else if(isPlay){
            setTimeout(() =>{
            setTotalTime(totalTime-1)
        }, 1000)
    }}, [totalTime, isPlay, retorno])

    return (
        <div>
            <h1 className="titulo">Cronometro</h1>
            {!breakTimeRun ?
                <div className="cronometroBox">
                <span>{min.toString().padStart(2, "0")}</span>
                <span>:</span>
                <span>{seg.toString().padStart(2, "0")}</span>
                </div>
                :
                <div className="cronometroBoxBreak">
                <span>{min.toString().padStart(2, "0")}</span>
                <span>:</span>
                <span>{seg.toString().padStart(2, "0")}</span>
                </div>
            }
            <div className="clockButtons">
            <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-dark" onClick={handlePlay}>START</button>
            <button type="button" className="btn btn-dark" onClick={handlePause}>PAUSE</button>
            <button type="button" className="btn btn-dark" onClick={handleDefault}>REINICIAR</button>
            </div>
            </div>
            
        </div>
        
        
    )
}

export default Clock;