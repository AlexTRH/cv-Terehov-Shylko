import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { ISkill } from '../../../interfaces/skill.interface'
import { createSortLabel } from '../../atoms/sort-label'

export const PositionsTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{createSortLabel<ISkill>('name', t('Name'))}</TableCell>
      <TableCell />
    </TableRow>
  )
}
