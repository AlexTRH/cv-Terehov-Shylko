import { useMutation } from '@apollo/client'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Dialog, DialogContent, IconButton } from '@mui/material'
import { useForm } from 'react-hook-form'
import { getCreateSkillMutation, getSkillsQuery } from '../../../graphql/skills/skills.queries'
import {
  StyledBox,
  StyledDialogTitle,
} from './skills-dialog.styles'
import { FormInput } from './skill-dialog.types'
import FormFields from '../../molecules/form-fields/form-fields.molecule'

interface Props {
  opened: boolean
  close: () => void
  confirm: () => void
}

const CreateSkillForm: React.FC<Props> = ({ close, confirm, opened }) => {
  const { control, handleSubmit, reset } = useForm<FormInput>()

  const [CreateSkill, { loading }] = useMutation(getCreateSkillMutation, {
    refetchQueries: [{ query: getSkillsQuery }],
  })

  const onSubmit = async (inputs: FormInput) => {
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
    <Dialog open={opened} onClose={close}>
      <StyledDialogTitle>
        Create Skill
        <IconButton onClick={close}>
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <DialogContent>
        <StyledBox
          marginTop={3}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormFields control={control} />
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            onClick={confirm}
          >
            Save
          </Button>
        </StyledBox>
      </DialogContent>
    </Dialog>
  )
}

export default CreateSkillForm
