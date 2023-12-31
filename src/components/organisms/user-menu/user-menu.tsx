import { useQuery, useReactiveVar } from '@apollo/client'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Logout from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import { Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutesPath } from '@constants/routes.constants'

import { authService } from '@graphql/auth/auth.service'
import { UserResult } from '@graphql/users/users.types'
import { getUserQuery } from '@graphql/users/users.queries'
import { IconStyles, StyledAvatar, UserMenuWrap } from './user-menu.styles'

export const UserMenu = () => {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement | undefined>(null)

  const userData = useReactiveVar(authService.user$)

  const { data } = useQuery<UserResult>(getUserQuery, {
    variables: { id: userData?.id },
  })
  const user = data?.user

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    authService.logout()
    navigate(RoutesPath.Login)
  }

  const openProfile = () => {
    navigate(RoutesPath.EmployeeProfile.replace(':id', `${user?.id}`), {
      replace: true,
    })
  }

  return (
    <>
      <UserMenuWrap>
        <Typography>{user?.profile.full_name || user?.email}</Typography>
        <IconButton onClick={handleClick} size="large">
          <StyledAvatar src={user?.profile.avatar} alt="user avatar">
            {user?.email[0].toUpperCase()}
          </StyledAvatar>
        </IconButton>
      </UserMenuWrap>
      {!!anchorEl && (
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClick={handleClose}>
          <MenuItem onClick={openProfile}>
            <AccountCircleIcon sx={IconStyles} />
            Profile
          </MenuItem>

          <MenuItem>
            <SettingsIcon sx={IconStyles} />
            Setting
          </MenuItem>

          <Divider />

          <MenuItem onClick={handleLogout}>
            <Logout sx={IconStyles} />
            Logout
          </MenuItem>
        </Menu>
      )}
    </>
  )
}
