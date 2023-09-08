import { FC, memo } from 'react'
import { Divider, Drawer, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { SideMenuItem } from '../../molecules/side-menu-item'
import { LIST_ITEMS } from './side-menu.constants'
import * as Styled from './side-menu.styles'
import { SideMenuProps } from './side-menu.types'

const SideMenu: FC<SideMenuProps> = ({ open, onClose }) => {
  return (
    <>
      <Drawer anchor="left" open={open} keepMounted onClick={onClose}>
        <Styled.ToolBar>
          <IconButton sx={{ ml: 'auto' }} color="primary" onClick={onClose}>
            <Close />
          </IconButton>
        </Styled.ToolBar>
        <Divider />
        <Styled.List>
          {LIST_ITEMS.map(({ IconComponent, DividerComponent, name, to }) => (
            DividerComponent && <DividerComponent key="divider" />
          ))}
            return (
              <SideMenuItem
                key={name}
                IconComponent={IconComponent}
                name={name}
                to={to}
              />
            )
          })}
        </Styled.List>
      </Drawer>
    </>
  )
}

export default memo(SideMenu)
