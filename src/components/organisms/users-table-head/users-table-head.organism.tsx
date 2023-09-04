import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { createSortLabel } from '../../atoms/sort-label'
import { IUser } from '../../../interfaces/user.interface'

const UsersTableHead = () => {
  const { t } = useTranslation()

  const tableHeadData = [
    { key: 'profile.first_name', label: t('First Name') },
    { key: 'profile.last_name', label: t('Last Name') },
    { key: 'email', label: t('Email') },
    { key: 'department_name', label: t('Department') },
    { key: 'position_name', label: t('Position') },
  ]

  return (
    <TableRow>
      <TableCell />
      {tableHeadData.map((item) => (
        <TableCell key={item.key}>
          {createSortLabel<IUser>(item.key, item.label)}
        </TableCell>
      ))}
      <TableCell />
    </TableRow>
  )
}

export default memo(UsersTableHead)
