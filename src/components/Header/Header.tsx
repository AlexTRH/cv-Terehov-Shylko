import React, { useState, startTransition } from 'react'
import { useReactiveVar } from '@apollo/client';
import { authService } from '../../graphql/auth/auth.service';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { StyledBox, StyledIconButton, StyledToolbar } from './header.styles'
import { RoutesPath } from '../../constants/routes.constants';
//import { SideMenu } from '../SideMenu';
import { UserMenu } from '../UserMenu/UserMenu';

const Header = () => {
  const isAuth = useReactiveVar(authService.access_token$);
  const [value, setValue] = useState('LOGIN')
   const [isOpen, setIsOpen] = useState(false)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    startTransition(() => {
      setValue(newValue);
    });
  };

   const openMenu = () => {
    setIsOpen(true)
  };

  const closeMenu = () => {
    setTimeout(() => {
      setIsOpen(false)
    }, 90);
  };

  return (
    <AppBar position="static">
      {isAuth ? (
        <StyledToolbar>
          <StyledIconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            onClick={() => console.log('StyledIconButton')}
          >
            <MenuIcon />
          </StyledIconButton>
          {/* <SideMenu open={isOpen} onClose={closeMenu} /> */}
          <UserMenu />
        </StyledToolbar>
      ) : (
        <Toolbar>
          <StyledBox>
              <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
            >
              <Tab
                value="LOGIN"
                label="LOGIN"
                component={Link}
                to={RoutesPath.Login}
              ></Tab>
              <Tab
                value="SIGNUP"
                label="SIGNUP"
                component={Link}
                to={RoutesPath.Signup}
              ></Tab>
            </Tabs>
          </StyledBox>
        </Toolbar>
      )}
    </AppBar>
  )
}

export default Header
