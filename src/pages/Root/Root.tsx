import React from 'react';
import { Hero } from 'react-daisyui';
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <Hero className="flex justify-center">
      {/* <Outlet /> */}
      <Hero.Content className="text-center">
        Root
      </Hero.Content>
    </Hero>
  )
}

export default Root;