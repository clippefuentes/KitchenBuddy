import React from 'react';
import Header from '@components/Root/Header';
import Tab from '@components/Root/Tab';
import { Outlet } from "react-router-dom";
import useRootHook from './hooks/useRootHooks'

function Root() {
  const { isOpenMenu, handleMenu } = useRootHook()
  return (
    <div>
      <Header
        handleMenu={handleMenu} 
      />
      <Tab isOpen={isOpenMenu} handleMenu={handleMenu} />
      <Outlet />
    </div>
  )
}

export default Root;