import React, { useState } from "react";
import styles from './App.module.scss'
import FormattedTime from "./FormattedTime/FormattedTime";

function App() {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    if(timer) return;

    const newTimer = setInterval(() => {
      setTime(prevTime => prevTime + 10);
    }, 10 );
    setTimer(newTimer)
  };

  const stop = () => {
    if(timer){
      clearInterval(timer);
      setTimer(null);
    };
  };

  const reset = () => {
    if(timer) {
      clearInterval(timer);
      setTimer(null);
    };
    setTime(0);
  };

  return (
    <div className={styles.component}>
      <FormattedTime time={time} />
      <button onClick={start}>START</button>
      <button onClick={stop}>STOP</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
}

export default App;
