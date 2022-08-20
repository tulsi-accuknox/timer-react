import React, {useState,useEffect} from 'react'
import './Timer_count.css'

const Timer_count = () => {
  
    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [hours,setHours] = useState(0);
    const [active, setActive] = useState(false)
   
    let timer;

    useEffect(() => {

        if(active){
            timer = setInterval(() =>{
            
                setSeconds(seconds + 1);
        
                if(minutes === 59){
                    setHours(hours + 1);
                    setMinutes(0);
                }
        
                if(seconds === 59){
                       setMinutes(minutes + 1);
                    setSeconds(0);
               }
        
            },1000) 
        }
       
        
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
                <p className="time-display">{hours < 10 ? "0"+hours : hours }:{minutes < 10 ? "0"+minutes : minutes }:{seconds < 10 ? "0"+seconds : seconds}</p>
                <button className="resume" onClick={() => setActive(!active)}>
                    {active ? <i class='bx bx-pause-circle' ></i>: <i class='bx bx-play-circle' ></i> }
                </button>
               
                <button className="stop" onClick={stop}><i class='bx bx-stop-circle' ></i></button>
                <button className="restart" onClick={restart}><i class='bx bx-reset bx-flip-horizontal' ></i></button>
            </div>
        </div>
    </div>
  )
}

export default Timer_count