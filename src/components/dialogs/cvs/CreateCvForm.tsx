import { useMutation, useQuery, useReactiveVar } from '@apollo/client'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Dialog, DialogContent, IconButton } from '@mui/material'
import { useForm } from 'react-hook-form'
import { authService } from '../../../graphql/auth/auth.service'
import { createCv, getCVsQuery } from '../../../graphql/cvs/cvs.queries'
import { User } from '../../../graphql/user/user.queries'
import { StyledBox, StyledDialogTitle } from './CreateCvForm.styles'
import FormFields from './FormFields'
import { CreateCvFormInput, CreateCvFormProps, UserAllResult } from './CreateCvForm.types'


const CreateCvForm: React.FC<CreateCvFormProps> = ({ close, confirm, opened }) => {
  const { control, handleSubmit, reset } = useForm<CreateCvFormInput>()
  const user = useReactiveVar(authService.user$)

  const { data: userData } = useQuery<UserAllResult>(
    User,
    {
      variables: { id: user?.id },
    }
  )

  const [createCV, { loading }] = useMutation(createCv, {
    refetchQueries: [{ query: getCVsQuery }],
  })

  const onSubmit = async (inputs: CreateCvFormInput) => {
    await createCV({
      variables: {
        cv: {
          name: inputs.name,
          description: inputs.description,
          userId: userData?.user.id,
          skills: [],
          projectsIds: [],
          languages: [],
          is_template: inputs.template,
        },
      },
    })

    reset()
  }

  return (
    <>
      <Dialog open={opened} onClose={close}>
        <StyledDialogTitle>
          Create CV
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
    </>
  )
}

export default CreateCvForm
