import React, { useState, useEffect } from 'react';
import {
  Hero,
  Countdown,
  Button,
  Input
} from 'react-daisyui';

import EditTimer from './components/EditTimer';
import userTimerHooks from './hooks/useTimerHooks';


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
  } = userTimerHooks()
  return (
    <Hero className="flex justify-center items-center h-full">
      {/* <Outlet /> */}
      <Hero.Content className="text-center bg-neutral flex flex-col w-2/5">
        {/* <Countdown className="text-2xl" value={value} /> */}
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
      </Hero.Content>
    </Hero>
  )
}

export default Timer;