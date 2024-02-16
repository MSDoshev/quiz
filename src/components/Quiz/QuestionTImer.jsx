import { useEffect, useState } from "react";

export default function QuestionTimer({timeout, onTimeout}){
    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {
        console.log('SETTING TIMEOUT');
      const timerTimeout =  setTimeout(() => {
            onTimeout();
        }, timeout);

        return () => clearInterval(timerTimeout)

    }, [onTimeout, timeout])
   

    useEffect(() => {
        console.log('SETTING INTERVAL');
        const timerInterval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100);

        return () => clearInterval(timerInterval)

    }, [])

    

    return <progress id="question-time" max={timeout} value={remainingTime}/>
}