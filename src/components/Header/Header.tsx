import React, { useState, startTransition } from 'react'
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, useLocation } from 'react-router-dom'
import { StyledBox, StyledIconButton, StyledToolbar } from './header.styles'
import { RoutesPath } from '../../constants/routes.constants';

const Header = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [value, setValue] = useState('LOGIN')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    startTransition(() => {
      setValue(newValue);
    });
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
                to={RoutesPath.login}
              ></Tab>
              <Tab
                value="SIGNUP"
                label="SIGNUP"
                component={Link}
                to={RoutesPath.signup}
              ></Tab>
            </Tabs>
          </StyledBox>
        </Toolbar>
      )}
    </AppBar>
  )
}

export default Header
