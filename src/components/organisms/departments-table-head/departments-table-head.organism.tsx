import React from 'react'
import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { IDepartment } from '@interfaces/department.interface'
import { createSortLabel } from '@atoms/sort-label'

const { t } = useTranslation()

export const DepartmentsTableHead = () => {
  const tableHeadData = React.useMemo(
    () => [{ key: 'name', label: t('Name') }],
    [t]
  )

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
