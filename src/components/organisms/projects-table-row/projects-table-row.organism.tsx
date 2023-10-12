import { useMutation } from '@apollo/client'
import { MenuItem, TableCell, TableRow } from '@mui/material'
import { ActionsMenu }from '../../atoms/actions-menu'
import { TableRowProps } from '../../templates/table/table.types'
import { getDeleteProjectMutation, getProjectsQuery } from '../../../graphql/projects/projects.queries'
import { IProject } from '../../../interfaces/project.interface'
import { useUser } from '../../../hooks/use-user.hook'

export const ProjectsTableRow = ({ item }: TableRowProps<IProject>) => {
  const { isAdmin } = useUser()

  const [DeleteProject] = useMutation<{ affected: number }>(getDeleteProjectMutation, {
    refetchQueries: [{ query: getProjectsQuery }]
  })

  const handleDelete = () => {
    DeleteProject({
      variables: { id: item.id }
    })
  }

  return (
      <TableRow>
        <TableCell>{item.name}</TableCell>
        <TableCell sx={{ textAlign: 'right' }}>
          <ActionsMenu>
            <MenuItem disabled={!isAdmin} onClick={handleDelete}>
              Delete
            </MenuItem>
          </ActionsMenu>
        </TableCell>
      </TableRow>
  )
}