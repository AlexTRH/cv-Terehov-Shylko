import { Button } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SearchInput } from '../../molecules/search-input'
import CreateCvForm from '../../dialogs/cvs/CreateCvForm'

export const CVsTableTool = () => {
  const [formOpened, setFormOpened] = useState(false)
  const { t } = useTranslation()
  const createCvClick = () => {
    setFormOpened(true)
  }

  const closeForm = () => {
    setFormOpened(false)
  }

  const createUser = () => {
    closeForm()
  }
  return (
    <>
      <CreateCvForm
        opened={formOpened}
        close={closeForm}
        confirm={createUser}
      />
      <SearchInput />
      <Button color="secondary" variant="contained" onClick={createCvClick}>
        {t('Create CV')}
      </Button>
    </>
  )
}
