import { useMutation } from '@apollo/client'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Dialog, DialogContent, IconButton } from '@mui/material'
import { useForm } from 'react-hook-form'
import {
  getUpdateSkillMutation,
  getSkillsQuery,
} from '../../../graphql/skills/skills.queries'
import {
  StyledBox,
  StyledDialogTitle,
} from './skills-dialog.styles'
import { FormInput } from './skill-dialog.types'
import FormFields from '../../molecules/form-fields/form-fields.molecule'
import { UpdateSkillFormProps } from './skill-update-form.interface'

const UpdateSkillForm: React.FC<UpdateSkillFormProps> = ({ close, confirm, opened, id }) => {
  const { control, handleSubmit, reset } = useForm<FormInput>()

  const [UpdateSkill] = useMutation(getUpdateSkillMutation, {
    refetchQueries: [{ query: getSkillsQuery }],
  })

  const onSubmit = async (inputs: FormInput) => {
    await UpdateSkill({
      variables: {
        id,
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
        Update Skill
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

export default UpdateSkillForm
