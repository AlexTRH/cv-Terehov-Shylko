import React, { useState } from 'react'
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, useLocation } from 'react-router-dom'
import { StyledBox, StyledIconButton, StyledToolbar } from './header.styles'

const Header = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [value, setValue] = React.useState('LOGIN')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

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
                to={'/login'}
              ></Tab>
              <Tab
                value="SIGNUP"
                label="SIGNUP"
                component={Link}
                to={'/signup'}
              ></Tab>
            </Tabs>
          </StyledBox>
        </Toolbar>
      )}
    </AppBar>
  )
}

export default Header
