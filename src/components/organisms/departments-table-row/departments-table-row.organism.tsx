import { useMutation } from '@apollo/client'
import { MenuItem, TableCell, TableRow } from '@mui/material'
import { useState } from 'react'
import { ActionsMenu } from '@atoms/actions-menu'
import { TableRowProps } from '@templates/table/table.types'
import {
  getDeleteDepartmentsMutation,
  getDepartmentsQuery,
} from '@graphql/departments/departments.queries'
import { IDepartment } from '@interfaces/department.interface'
import { useUser } from '@hooks/use-user.hook'
import UpdateDepartmentsForm from '@dialogs/departments/departments-update-form'

export const DepartmentsTableRow = ({
  tableRowItem,
}: TableRowProps<IDepartment>) => {
  const { isAdmin } = useUser()
  const [formOpened, setFormOpened] = useState(false)

  const handleUpdateClick = () => {
    setFormOpened(true)
  }

  const handleCloseForm = () => {
    setFormOpened(false)
  }

  const handleCreate = () => {
    handleCloseForm()
  }

  const [deleteDepartment] = useMutation<{ affected: number }>(
    getDeleteDepartmentsMutation,
    {
      refetchQueries: [{ query: getDepartmentsQuery }],
    }
  )

  const handleDelete = () => {
    deleteDepartment({
      variables: { id: tableRowItem.id },
    })
  }

  return (
    <>
      <UpdateDepartmentsForm
        opened={formOpened}
        close={handleCloseForm}
        confirm={handleCreate}
        id={tableRowItem.id}
      />
      <TableRow>
        <TableCell>{tableRowItem.name}</TableCell>
        <TableCell sx={{ textAlign: 'right' }}>
          <ActionsMenu>
            <MenuItem disabled={!isAdmin} onClick={handleUpdateClick}>
              Update
            </MenuItem>
            <MenuItem disabled={!isAdmin} onClick={handleDelete}>
              Delete
            </MenuItem>
          </ActionsMenu>
        </TableCell>
      </TableRow>
    </>
  )
}
