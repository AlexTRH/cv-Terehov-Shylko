import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import { SearchInput } from '../../molecules/search-input'
import CreateSkillForm from '../../dialogs/skills/skills'
import { useUser } from '../../../hooks/use-user.hook'

export const SkillsTableConfirm = () => {
  const { t } = useTranslation()
  const [formOpened, setFormOpened] = useState(false);
   const { isAdmin } = useUser()

  const CreateClick = () => {
    setFormOpened(true);
  };

  const closeForm = () => {
    setFormOpened(false);
  };

  const create = async () => {
    closeForm();
  };
  return (
    <>
      <CreateSkillForm opened={formOpened} close={closeForm} confirm={create} />
      <SearchInput />
      <Button
        disabled={!isAdmin}
        color="secondary"
        variant="contained"
        onClick={CreateClick}
      >
        {t('Create Skill')}
      </Button>
    </>
  );
};
