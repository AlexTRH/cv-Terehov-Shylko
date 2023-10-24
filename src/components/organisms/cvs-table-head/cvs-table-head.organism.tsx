import React from 'react'
import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { createSortLabel } from '../../atoms/sort-label'
import { ICV } from '../../../interfaces/cv.interface'

export const CVsTableHead = () => {
  const { t } = useTranslation()
  const sortLabel = (key: string, label: string) =>
    createSortLabel<ICV>(key, label)

  return (
    <TableRow>
      <TableCell>{t('Template')}</TableCell>
      <TableCell>{sortLabel('name', t('Name'))}</TableCell>
      <TableCell>{t('Description')}</TableCell>
      <TableCell>{sortLabel('user.email', t('Employee'))}</TableCell>
      <TableCell />
    </TableRow>
  )
}
