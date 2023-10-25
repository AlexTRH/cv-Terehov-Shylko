import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { createSortLabel } from '@atoms/sort-label'
import { IUser } from '@interfaces/user.interface'

const UsersTableHead = () => {
  const { t } = useTranslation()

  const tableHeadData = [
    { key: 'profile.first_name', label: 'First Name' },
    { key: 'profile.last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'department_name', label: 'Department' },
    { key: 'position_name', label: 'Position' },
  ]

  return (
    <TableRow>
      <TableCell />
      {tableHeadData.map((item) => (
        <TableCell key={item.key}>
          {createSortLabel<IUser>(item.key, t(item.label))}
        </TableCell>
      ))}
      <TableCell />
    </TableRow>
  )
}

export default memo(UsersTableHead)
