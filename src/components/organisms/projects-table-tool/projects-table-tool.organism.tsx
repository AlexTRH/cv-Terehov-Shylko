import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SearchInput } from '../../molecules/search-input'
import { useUser } from '../../../hooks/use-user.hook'
import { useCreateProjectDialog } from '../../dialogs/create-project'

export const ProjectsTableTool = () => {
  const { isAdmin } = useUser()
  const { t } = useTranslation()
  const [openCreateProjectDialog] = useCreateProjectDialog()

  return (
    <>
      <SearchInput />
      {isAdmin && (
        <Button variant="outlined" onClick={openCreateProjectDialog}>
          {t('Create project')}
        </Button>
      )}
    </>
  )
}
