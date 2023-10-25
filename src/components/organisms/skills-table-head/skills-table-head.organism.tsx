import { TableCell, TableRow } from '@mui/material'
import { createSortLabel } from '@atoms/sort-label'

export const SkillsTableHead = () => {
  return (
    <TableRow>
      <TableCell>{createSortLabel('name', 'Skill Name')}</TableCell>
      <TableCell />
    </TableRow>
  )
}
