import { TableCell, TableRow } from '@mui/material';
import { createSortLabel } from '../../atoms/sort-label';

export const ProjectsTableHead = () => {
  return (
    <TableRow>
      <TableCell>{createSortLabel('name', 'Project Name')}</TableCell>
      <TableCell />
    </TableRow>
  );
};