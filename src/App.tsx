import React from 'react';
import { Outlet } from "react-router-dom";
import {
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@components/Root/Header';
import Layout from '@components/Root/Layout';
import useRootHook from '@pages/Root/hooks/useRootHooks'

import Root from "@pages/Root";
import Timer from "@pages/Timer";

import router from './router'

function App() {
  const { isOpenMenu, handleMenu } = useRootHook()
  return (
    <BrowserRouter>
      <Header
        handleMenu={handleMenu}
      />
      <Layout isOpen={isOpenMenu} handleMenu={handleMenu}>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;