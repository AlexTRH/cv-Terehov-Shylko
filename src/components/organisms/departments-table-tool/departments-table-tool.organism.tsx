import { useState } from 'react'
import { Button } from '@mui/material'
import { SearchInput } from '../../molecules/search-input'
import CreateDepartmentsForm from '../../dialogs/departments/departments-update-form'
import { useUser } from '../../../hooks/use-user.hook'

export const DepartmentsTableTool = () => {
  const [formOpened, setFormOpened] = useState(false)
  const { isAdmin } = useUser()

  const CreateClick = () => {
    setFormOpened(true)
  }

  const closeForm = () => {
    setFormOpened(false)
  }

  const create = async () => {
    closeForm()
  }
  return (
    <>
      <CreateDepartmentsForm
        opened={formOpened}
        close={closeForm}
        confirm={create}
      />
      <SearchInput />
      <Button
        disabled={!isAdmin}
        color="secondary"
        variant="contained"
        onClick={CreateClick}
      >
        Create Department
      </Button>
    </>
  )
}
