import { useMutation } from '@apollo/client'
import { MenuItem, TableCell, TableRow } from '@mui/material'
import { useState } from 'react'
import { ActionsMenu }from '../../atoms/actions-menu'
import { TableRowProps } from '../../templates/table/table.types'
import { getDeleteSkillMutation, getSkillsQuery } from '../../../graphql/skills/skills.queries'
import { ISkill } from '../../../interfaces/skill.interface'
import { useUser } from '../../../hooks/use-user.hook'
import UpdateSkillForm from '../../dialogs/skills/skill-update-form'

export const SkillsTableRow = ({ item }: TableRowProps<ISkill>) => {
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
      <UpdateSkillForm
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