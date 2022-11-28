import React, { ReactNode } from 'react';
import { Drawer, Menu } from 'react-daisyui';
import './styles.scss'

interface TabProps {
  handleMenu: () => void,
  isOpen: boolean,
}

function Tab(props: TabProps) {
  const {
    handleMenu,
    isOpen,
  } = props;

  const menus = [
    {
      text: 'Home',
    }, {
      text: 'Profile'
    }
  ]

  function renderMenu(): ReactNode {
    return (
      <Menu>
        {
          menus.map((menu) => (
            <Menu.Item>
              <a>{menu.text}</a>
            </Menu.Item>
          ))
        }
      </Menu>
    )
  }

  return (
    <Drawer
      side={renderMenu()}
      open={isOpen}
      onClickOverlay={handleMenu}
      className={'root-drawer'}
    />
  )
}

export default Tab;
