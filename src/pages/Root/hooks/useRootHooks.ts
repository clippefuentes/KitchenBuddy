import { useState } from "react";

function useRootHooks() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return {
    setIsOpenMenu,
    isOpenMenu,
    handleMenu,
  }
}

export default useRootHooks;