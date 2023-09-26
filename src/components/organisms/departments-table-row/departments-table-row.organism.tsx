export function getAllDepartments(departments: IDepartment[]) {
  return departments?.map((department) => ({
    id: department?.id,
    name: department?.name || '',
  }))
}

import { useMutation } from '@apollo/client'
import { MenuItem, TableCell, TableRow } from '@mui/material'
import { useState } from 'react'
import { ActionsMenu } from '../../atoms/actions-menu'
import { TableRowProps } from '../../templates/table/table.types'
import {
  getDeleteDepartmentsMutation,
  getDepartmentsQuery,
} from '../../../graphql/departments/departments.queries'
import { IDepartment } from '../../../interfaces/department.interface'
import { useUser } from '../../../hooks/use-user.hook'
import UpdateDepartmentsForm from '../../dialogs/departments/departments-update-form'

export const DepartmentsTableRow = ({ item }: TableRowProps<IDepartment>) => {
  const { isAdmin } = useUser()
  const [formOpened, setFormOpened] = useState(false)
  const UpdateClick = () => {
    setFormOpened(true)
  }

  const closeForm = () => {
    setFormOpened(false)
  }

  const create = async () => {
    closeForm()
  }

  const [deleteDepartment] = useMutation<{ affected: number }>(
    getDeleteDepartmentsMutation,
    {
      refetchQueries: [{ query: getDepartmentsQuery }],
    }
  )

  const handleDelete = async () => {
    await deleteDepartment({
      variables: { id: item.id },
    })
  }

  return (
    <>
      <UpdateDepartmentsForm
        opened={formOpened}
        close={closeForm}
        confirm={create}
        id={item.id}
      />
      <TableRow>
        <TableCell>{item.name}</TableCell>
        <TableCell sx={{ textAlign: 'right' }}>
          <ActionsMenu>
            <MenuItem disabled={!isAdmin} onClick={UpdateClick}>
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
