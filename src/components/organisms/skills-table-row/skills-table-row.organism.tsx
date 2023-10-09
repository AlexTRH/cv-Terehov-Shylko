import { useMutation } from '@apollo/client'
import { MenuItem, TableCell, TableRow } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormInput } from '../../dialogs/skills/skill-dialog.types'
import { ActionsMenu }from '../../atoms/actions-menu'
import { TableRowProps } from '../../templates/table/table.types'
import { getDeleteSkillMutation, getSkillsQuery, getUpdateSkillMutation } from '../../../graphql/skills/skills.queries'
import { ISkill } from '../../../interfaces/skill.interface'
import { useUser } from '../../../hooks/use-user.hook'
import SkillsTemplate from '../../dialogs/skills/skills-template'

export const SkillsTableRow = ({ item }: TableRowProps<ISkill>) => {
  const { isAdmin } = useUser()
  const [formOpened, setFormOpened] = useState(false)
  const { reset } = useForm<FormInput>()
  const UpdateClick = () => {
    setFormOpened(true)
  }

  const closeForm = () => {
    setFormOpened(false)
  }

  const create = async () => {
    closeForm()
  }

  const [UpdateSkill] = useMutation(getUpdateSkillMutation, {
    refetchQueries: [{ query: getSkillsQuery }],
  })

  const onUpdateSkill = async (inputs: FormInput) => {
    await UpdateSkill({
      variables: {
        id: item.id,
        skill: {
          name: inputs.name,
        },
      },
    })

    reset()
  }
  const [deleteSkill] = useMutation<{ affected: number }>(getDeleteSkillMutation, {
    refetchQueries: [{ query: getSkillsQuery }]
  })

  const handleDelete = async () => {
    await deleteSkill({
      variables: { id: item.id }
    })
  }

  return (
    <>
      <SkillsTemplate
        opened={formOpened}
        close={closeForm}
        confirm={create}
        id={item.id}
        title={'Update Skill'}
        onSubmit={onUpdateSkill}
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