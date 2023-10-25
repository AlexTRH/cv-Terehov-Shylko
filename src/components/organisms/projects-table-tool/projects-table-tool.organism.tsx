import { useState } from 'react'
import { Button } from '@mui/material'
import { SearchInput } from '@molecules/search-input'
import CreateProjectForm from '@dialogs/projects/projects-form'
import { useUser } from '@hooks/use-user.hook'

export const ProjectsTableConfirm = () => {
  const [formOpened, setFormOpened] = useState(false)
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
      <CreateProjectForm
        opened={formOpened}
        close={closeForm}
        confirm={create}
      />
      <SearchInput />
      <Button
        disabled={!isAdmin}
        color="secondary"
        variant="contained"
        onClick={createClick}
      >
        Create Project
      </Button>
    </>
  )
}
