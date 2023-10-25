import React from 'react'
import { useTranslation } from 'react-i18next'
import { Checkbox, MenuItem, TableCell, TableRow } from '@mui/material'
import { TableRowProps } from '../../templates/table/table.types'
import { ActionsMenu } from '../../atoms/actions-menu'
import { ICV } from '../../../interfaces/cv.interface'

export const CVsTableRow = ({ tableRowItem }: TableRowProps<ICV>) => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>
        <Checkbox checked={tableRowItem.is_template} readOnly />
      </TableCell>
      <TableCell
        sx={{
          maxWidth: 120,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        {tableRowItem.name}
      </TableCell>
      <TableCell>{tableRowItem.description}</TableCell>
      <TableCell>{tableRowItem.user?.email}</TableCell>
      <TableCell>
        <ActionsMenu>
          <MenuItem disabled>{t('CV')}</MenuItem>
        </ActionsMenu>
      </TableCell>
    </TableRow>
  )
}
