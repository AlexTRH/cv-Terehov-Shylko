import React from 'react'
import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { IDepartment } from '../../../interfaces/department.interface'
import { createSortLabel } from '../../atoms/sort-label'

export const DepartmentsTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{createSortLabel<IDepartment>('name', t('Name'))}</TableCell>
      <TableCell />
    </TableRow>
  )
}
