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
    pauseTimer,
    resetTimer,
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
            <Button className='w-full' onClick={startTimer} color="secondary">Start</Button>
          ) : (
            <div className='flex w-full justify-between'>
              <Button className='w-3/12 px-1' onClick={stopTimer} color="error">Stop</Button>
              <Button className='w-3/12 px-1' onClick={pauseTimer} color="warning">Pause</Button>
              <Button className='w-3/12 px-1' onClick={resetTimer} color="info">Reset</Button>
            </div>
          )
        }
        
      </Hero.Content>
    </Hero>
  )
}

export default Timer;