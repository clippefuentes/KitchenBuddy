import React from 'react';
import Header from '@components/Root/Header';
import Tab from '@components/Root/Tab';

import useRootHook from './hooks/useRootHooks'

function Root() {
  const { isOpenMenu, handleMenu } = useRootHook()
  return (
    <div>
      <Header
        handleMenu={handleMenu} 
      />
      <Tab isOpen={isOpenMenu} handleMenu={handleMenu} />
    </div>
  )
}

export default Root;