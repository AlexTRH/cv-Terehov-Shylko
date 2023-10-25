import { useState } from 'react'
import { Button } from '@mui/material'
import CreateDepartmentsForm from '@dialogs/departments/departments-update-form'
import { useUser } from '@hooks/use-user.hook'
import { SearchInput } from '@molecules/search-input'

export const DepartmentsTableTool = () => {
  const [formOpened, setFormOpened] = useState<boolean>(false)
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

  const departmentsForm = (
    <CreateDepartmentsForm
      opened={formOpened}
      close={closeForm}
      confirm={create}
    />
  )

  return (
    <>
      {departmentsForm}
      <SearchInput key="search-input" />
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
