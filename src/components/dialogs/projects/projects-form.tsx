import { useMutation } from '@apollo/client'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Dialog, DialogContent, IconButton } from '@mui/material'
import { useForm } from 'react-hook-form'
import {
  getCreateProjectMutation,
  getProjectsQuery,
} from '../../../graphql/projects/projects.queries'
import { StyledBox, StyledDialogTitle } from '../skills/skills-dialog.styles'
import { FormInput } from '../skills/skill-dialog.types'
import FormFields from '../../molecules/form-fields/form-fields.molecule'
import { ProjectFormProps } from './project-form.type'

const CreateProjectForm: React.FC<ProjectFormProps> = ({
  close,
  confirm,
  opened,
}) => {
  const { control, handleSubmit, reset } = useForm<FormInput>()

  const [CreateProject, { loading }] = useMutation(getCreateProjectMutation, {
    refetchQueries: [{ query: getProjectsQuery }],
  })

  const onSubmit = async (inputs: FormInput) => {
    await CreateProject({
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
        Create Project
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

export default CreateProjectForm
