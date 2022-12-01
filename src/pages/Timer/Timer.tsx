import React, { useState, useEffect } from 'react';
import {
  Hero,
  Countdown
} from 'react-daisyui';

function Timer() {
  const [value, setValue] = useState<number>(99)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? 999 : v - 1))
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [value])

  return (
    <Hero className="flex justify-center">
      {/* <Outlet /> */}
      <Hero.Content className="text-center">
        <Countdown className="text-2xl" value={value} />
      </Hero.Content>
    </Hero>
  )
}

export default Timer;