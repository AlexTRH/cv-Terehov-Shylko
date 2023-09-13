import React from 'react'
import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { ILanguage } from '../../../interfaces/language.interface'
import { createSortLabel } from '../../atoms/sort-label'

export const LanguagesTableHead = () => {
  const { t } = useTranslation()
  const tableHeadData = [
    { key: 'name', label: t('Name') },
    { key: 'native_name', label: t('Native Name') },
    { key: 'iso2', label: 'ISO2' },
  ]

  return (
    <TableRow>
      {tableHeadData.map((item) => (
        <TableCell key={item.key}>
          {createSortLabel<ILanguage>(item.key, item.label)}
        </TableCell>
      ))}
      <TableCell />
    </TableRow>
  )
}
