import React, {useState,useEffect} from 'react'
import './Timer_count.css'

const Timer_count = () => {
  
    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(0);

    let timer;
    useEffect(() => {

        timer = setInterval(() =>{
            
            setSeconds(seconds + 1);
            if(seconds === 59){
                setMinutes(minutes + 1);
                setSeconds(0);
            }

        },1000)

        return () => clearInterval(timer);

    });


    const restart = () =>{
        setSeconds(0);
        setMinutes(0);
    }

    const stop = () =>{
        clearInterval(timer);
    }

  return (
    <div>
        <div className='container'>
            <div className="container-timer">
                <span>
                <h1 className="timer-head">Timer<i class='bx bx-stopwatch'></i></h1>
                </span>
                <p className="time-display">{minutes < 10 ? "0"+minutes : minutes }:{seconds < 10 ? "0"+seconds : seconds}</p>
                <button className="restart" onClick={restart}>Restart</button>
                <button className="stop" onClick={stop}>Stop</button>
            </div>
        </div>
    </div>
  )
}

export default Timer_count