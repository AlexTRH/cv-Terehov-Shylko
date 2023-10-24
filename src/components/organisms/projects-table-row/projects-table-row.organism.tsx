import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { MenuItem, TableCell, TableRow } from '@mui/material'
import { ActionsMenu } from '@atoms/actions-menu'
import { TableRowProps } from '@templates/table/table.types'
import {
  getDeleteProjectMutation,
  getProjectsQuery,
} from '@graphql/projects/projects.queries'
import { IProject } from '@interfaces/project.interface'
import { useUser } from '@hooks/use-user.hook'
import { Notifications } from '@features/notifications'

export const ProjectsTableRow = ({ item }: TableRowProps<IProject>) => {
  const { isAdmin } = useUser()

  const [errorMessage, setErrorMessage] = useState(false)


  const [DeleteProject] = useMutation<{ affected: number }>(
    getDeleteProjectMutation,
    {
      refetchQueries: [{ query: getProjectsQuery }],
      onError: (error) => {
        console.error('An error occurred during the mutation:', error)
        setErrorMessage(true)
      },
    }
  )


  const handleDelete = () => {
    DeleteProject({
      variables: { id: item.id },
    })
  }

  return (

    <>
      {errorMessage && <Notifications />}
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
    </>

  )
}
