import { useState } from 'react'
import { Button } from '@mui/material'
import CreateDepartmentsForm from '@dialogs/departments/departments-update-form'
import { useUser } from '@hooks/use-user.hook'
import { SearchInput } from '@molecules/search-input'

export const DepartmentsTableTool = () => {
  const [formOpened, setFormOpened] = useState<boolean>(false)
  const { isAdmin } = useUser()

  const createClick = () => {
    setFormOpened(true)
  }

  const closeForm = () => {
    setFormOpened(false)
  }

  const create = () => {
    closeForm()
  }

  return (
    <>
      <CreateDepartmentsForm
        opened={formOpened}
        close={closeForm}
        confirm={create}
      />
      <SearchInput key="search-input" />
      <Button
        disabled={!isAdmin}
        color="secondary"
        variant="contained"
        onClick={createClick}
      >
        Create Department
      </Button>
    </>
  )
}
