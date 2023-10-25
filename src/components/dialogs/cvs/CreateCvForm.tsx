import { useState } from 'react'
import { useMutation, useQuery, useReactiveVar } from '@apollo/client'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Dialog, DialogContent, IconButton } from '@mui/material'
import { useForm } from 'react-hook-form'
import { authService } from '../../../graphql/auth/auth.service'
import { createCv, getCVsQuery } from '../../../graphql/cvs/cvs.queries'
import { getUserQuery } from '../../../graphql/users/users.queries'
import { StyledBox, StyledDialogTitle } from './CreateCvForm.styles'
import FormFields from './FormFields'
import {
  CreateCvFormInput,
  CreateCvFormProps,
  UserAllResult,
} from './CreateCvForm.types'
import { Notifications } from '../../features/notifications'
import Preloader from '../../atoms/preloader/preloader.atom'

const CreateCvForm: React.FC<CreateCvFormProps> = ({
  close,
  confirm,
  opened,
}) => {
  const [errorMessage, setErrorMessage] = useState('')
  const { control, handleSubmit, reset } = useForm<CreateCvFormInput>()
  const user = useReactiveVar(authService.user$)

  const { data: userData } = useQuery<UserAllResult>(getUserQuery, {
    variables: { id: user?.id },
  })

  const [createCV, { loading, error }] = useMutation(createCv, {
    refetchQueries: [{ query: getCVsQuery }],
  })

  const onSubmit = async (inputs: CreateCvFormInput) => {
    try {
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
    } catch (error) {
      console.error('An error occurred during form submission:', error)
      setErrorMessage('An error occurred. Please try again.')
    }
  }

  return (
    <Preloader loading={loading} error={error}>
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
          {errorMessage && <Notifications message={errorMessage} show={true} />}
        </DialogContent>
      </Dialog>
    </Preloader>
  )
}

export default CreateCvForm
