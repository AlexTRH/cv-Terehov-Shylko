import React from 'react'
import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { ILanguage } from '../../../interfaces/language.interface'
import { createSortLabel } from '../../atoms/sort-label'

export const LanguagesTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{createSortLabel<ILanguage>('name', t('Name'))}</TableCell>
      <TableCell>
        {createSortLabel<ILanguage>('native_name', t('Native Name'))}
      </TableCell>
      <TableCell>{createSortLabel<ILanguage>('iso2', 'ISO2')}</TableCell>
      <TableCell />
    </TableRow>
  )
}
