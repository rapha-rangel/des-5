import './App.css';
import Clock from './components/Clock';
import TimeClock from './components/TimeClock';
import BreakTime from './components/BreakTime';
import { useState } from 'react';

function App() {
  const [totalTime, setTotalTime] = useState((25*60));
  const [breakTime, setBreakTime] = useState((300))
  const [isPlay, setIsPlay] = useState(false);
  const [retorno, setRetorno] = useState(false);
  const [time, setTime] = useState(25);  



  return (
    <div className="App">
      <div className='box'>
        <h1 className='tituloPrincipal'>Cronometro com Função Soneca</h1>
      <div className="display">
        <BreakTime breakTime={breakTime} setBreakTime={setBreakTime} isPlay={isPlay} setRetorno={setRetorno} />
        <TimeClock  time={time} setTime={setTime} totalTime={totalTime} setTotalTime={setTotalTime} setRetorno={setRetorno} isPlay={isPlay}/>
      </div>
        <Clock totalTime={totalTime} setTotalTime={setTotalTime} breakTime={breakTime} setBreakTime={setBreakTime} isPlay={isPlay} setIsPlay={setIsPlay} setTime={setTime} setRetorno={setRetorno} retorno={retorno}/>
      </div>
      </div>
  );
}

export default App;
