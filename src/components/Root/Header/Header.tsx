import React from 'react';
import { Navbar, Button } from 'react-daisyui';
import { List } from 'phosphor-react'

interface HeaderProps {
  handleMenu: () => void
}

function Header(props: HeaderProps) {
  const {
    handleMenu
  } = props;

  return (
    <Navbar className="bg-secondary">
      <Button className="text-xl base-100" onClick={handleMenu}>
        <List />
      </Button>
    </Navbar>
  )
}

export default Header;
