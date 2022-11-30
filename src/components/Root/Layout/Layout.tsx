import React from 'react';
import { Drawer, Menu } from 'react-daisyui';
import { Link } from 'react-router-dom';
import { RouterProviderProps } from 'react-router-dom';
import { routes } from 'src/router';
import './styles.scss'

interface TabProps {
  handleMenu: () => void,
  isOpen: boolean,
  children: React.ReactNode
}

function LayoutDrawer(props: TabProps) {
  const {
    handleMenu,
    isOpen,
    children,
  } = props;

  const menus = [
    {
      text: 'Home',
      path: '/'
    }, {
      text: 'Profile',
      path: '/'
    }, {
      text: 'Timer',
      path: 'timer'
    }
  ]

  function renderMenu(): React.ReactNode {
    return (
      <Menu
        className='bg-neutral'
      >
        {
          menus.map((menu) => (
            <Menu.Item key={'menu-' + menu.text}>
              <Link to={menu.path}>{menu.text}</Link>
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
    >
      {children}
    </Drawer>
  )
}

export default LayoutDrawer;
