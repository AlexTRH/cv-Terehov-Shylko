import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { FormInput } from '@dialogs/skills/skill-dialog.types'
import { Button } from '@mui/material'
import { SearchInput } from '@molecules/search-input'
import SkillsTemplate from '@dialogs/skills/skills-template'
import {
  getCreateSkillMutation,
  getSkillsQuery,
} from '@graphql/skills/skills.queries'
import { useUser } from '@hooks/use-user.hook'

export const SkillsTableConfirm = () => {
  const { t } = useTranslation()
  const [formOpened, setFormOpened] = useState(false)
  const { isAdmin } = useUser()
  const { reset } = useForm<FormInput>()

  const createClick = () => {
    setFormOpened(true)
  }

  const closeForm = () => {
    setFormOpened(false)
  }

  const create = () => {
    closeForm()
  }

  const [CreateSkill, { loading }] = useMutation(getCreateSkillMutation, {
    refetchQueries: [{ query: getSkillsQuery }],
  })

  const onCreateSkill = async (inputs: FormInput) => {
    await CreateSkill({
      variables: {
        skill: {
          name: inputs.name,
        },
      },
    })

    reset()
  }

  return (
    <>
      <SkillsTemplate
        title={'Create Skill'}
        onSubmit={onCreateSkill}
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
        {t('Create Skill')}
      </Button>
    </>
  )
}
