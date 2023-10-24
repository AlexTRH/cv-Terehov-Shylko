import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  TableRow,
  TableCell,
  Avatar,
  MenuItem,
  Typography,
} from '@mui/material'
import { IUser } from '@interfaces/user.interface'
import { useUser } from '@hooks/use-user.hook'
import { useUserDelete } from '@hooks/use-users.hook'
import { TableRowProps } from '@templates/table/table.types'
import { ActionsMenu } from '@atoms/actions-menu'
import { useUserDialog } from '@dialogs/user'
import { useConfirmDialog } from '@dialogs/confirm'
import { UserActions } from '@constants/users-table-row.constants'

const UsersTableRow = ({ item }: TableRowProps<IUser>) => {
  const navigate = useNavigate()
  const { isAdmin, user$ } = useUser()
  const isSelf = item.id === user$?.id
  const { t } = useTranslation()
  const [openUserDialog] = useUserDialog()
  const [deleteUser] = useUserDelete(item)
  const [openConfirmDialog] = useConfirmDialog()

  const { id, profile, email, department_name, position_name } = item

  const handleProfile = () => {
    navigate(`/employees/${id}/profile`)
  }

  const handleUpdate = () => {
    openUserDialog({ item })
  }

  const confirmDeleteUser = () => {
    openConfirmDialog({
      dialogTitle: t(UserActions.DeleteUser),
      dialogContent: (
        <Typography>
          {t('Are you sure you want to delete user')} <b>{getUserName()}</b>?
        </Typography>
      ),
      confirmCallback: () => deleteUser({ variables: { id } }),
    })
  }

  const getUserName = () => {
    return profile.full_name || email
  }

  const replaceActionLabel = (label: string): string => {
    return label.replace(/Profile|Update user|Delete user/gi, (match) => {
      switch (match) {
        case 'Profile':
          return t(UserActions.Profile)
        case 'Update user':
          return t(UserActions.UpdateUser)
        case 'Delete user':
          return t(UserActions.DeleteUser)
        default:
          return match
      }
    })
  }

  return (
    <TableRow>
      <TableCell>
        <Avatar src={profile.avatar}>
          {profile.full_name?.[0] || email[0]}
        </Avatar>
      </TableCell>
      <TableCell>{profile.first_name}</TableCell>
      <TableCell>{profile.last_name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{department_name}</TableCell>
      <TableCell>{position_name}</TableCell>
      <TableCell>
        <ActionsMenu>
          <MenuItem onClick={handleProfile}>{t(UserActions.Profile)}</MenuItem>
          <MenuItem disabled={!isAdmin && !isSelf} onClick={handleUpdate}>
            {replaceActionLabel(t(UserActions.UpdateUser))}
          </MenuItem>
          <MenuItem disabled={!isAdmin} onClick={confirmDeleteUser}>
            {replaceActionLabel(t(UserActions.DeleteUser))}
          </MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}

export default memo(UsersTableRow)
