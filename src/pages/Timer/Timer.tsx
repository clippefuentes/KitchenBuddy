import React from 'react';
import { Hero } from 'react-daisyui';

function Timer() {
  return (
    <Hero className="flex justify-center">
      {/* <Outlet /> */}
      <Hero.Content className="text-center">
        Timer
      </Hero.Content>
    </Hero>
  )
}

export default Timer;