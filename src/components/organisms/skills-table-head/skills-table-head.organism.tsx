import { TableCell, TableRow } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { createSortLabel } from '../../atoms/sort-label'
import { ISkill } from '../../../interfaces/skill.interface'

export const SkillsTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{createSortLabel<ISkill>('name', t('Name'))}</TableCell>
      <TableCell />
    </TableRow>
  )
}
