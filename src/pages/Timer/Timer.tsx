import React, { useState, useEffect } from 'react';
import {
  Hero,
  Countdown
} from 'react-daisyui';

enum Mode {
  Edit,
  Countdown
}

function Timer() {
  const [value, setValue] = useState<number>(99)
  const [mode, setMode] = useState<Mode>(Mode.Edit)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? 99 : v - 1))
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [value])

  return (
    <Hero className="flex justify-center items-center h-full">
      {/* <Outlet /> */}
      <Hero.Content className="text-center bg-neutral">
        <Countdown className="text-2xl" value={value} />
      </Hero.Content>
    </Hero>
  )
}

export default Timer;