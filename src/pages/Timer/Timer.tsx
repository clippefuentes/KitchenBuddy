import React, { useState, useEffect } from 'react';
import {
  Hero,
  Countdown,
  Button,
  Input
} from 'react-daisyui';

import EditTimer from './components/EditTimer';
import userTimerHooks, { Mode } from './hooks/useTimerHooks';


function Timer() {
  const {
    hours,
    minutes,
    seconds,
    addSubHours,
    addSubMinutes,
    addSubSeconds,
    setHours,
    setMinutes,
    setSeconds,
    startTimer,
    stopTimer,
    setMode,
    mode,
  } = userTimerHooks();

  const startCountdown = () => {
    // setMode(Mode.Countdown)
  }
  
  return (
    <Hero className="flex justify-center items-center h-full">
      {/* <Outlet /> */}
      <Hero.Content className="text-center bg-neutral flex flex-col w-2/5">
        {/* <Countdown className="text-2xl" value={value} /> */}
        
        {
          Mode.Edit === mode ? (
            <EditTimer
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              setHours={setHours}
              setMinutes={setMinutes}
              setSeconds={setSeconds}
              addSubHours={addSubHours}
              addSubMinutes={addSubMinutes}
              addSubSeconds={addSubSeconds}
            />
          ): (
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col">
                  <Countdown className="font-mono text-5xl" value={hours} />
                  hours
                </div>
                <div className="flex flex-col">
                  <Countdown className="font-mono text-5xl" value={minutes} />
                  min
                </div>
                <div className="flex flex-col">
                  <Countdown className="font-mono text-5xl" value={seconds} />
                  sec
                </div>
              </div>
          )
      }
        {
          Mode.Edit === mode ? (
            <Button onClick={startTimer}>Start</Button>
          ) : (
            <Button onClick={stopTimer}>Stop</Button>
          )
        }
        
      </Hero.Content>
    </Hero>
  )
}

export default Timer;