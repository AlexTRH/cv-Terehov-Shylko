import React from 'react'
import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { IDepartment } from '../../../interfaces/department.interface'
import { createSortLabel } from '../../atoms/sort-label'

export const DepartmentsTableHead = () => {
  const { t } = useTranslation()
  const tableHeadData = [{ key: 'name', label: t('Name') }]

  return (
    <TableRow>
      {tableHeadData.map((item) => (
        <TableCell key={item.key}>
          {createSortLabel<IDepartment>(item.key, item.label)}
        </TableCell>
      ))}
      <TableCell />
    </TableRow>
  )
}
