import { useMutation } from '@apollo/client'
import { Button, Dialog, DialogContent, IconButton } from '@mui/material'
import { useForm } from 'react-hook-form'
import CloseIcon from '@mui/icons-material/Close'
import {
  getCreateDepartmentsMutation,
  getDepartmentsQuery,
} from '@graphql/departments/departments.queries'
import FormFields from '@molecules/form-fields/form-fields.molecule'
import { FormInput, Props } from '@dialogs/departments/departments.interface'
import { StyledBox, StyledDialogTitle } from './departments-dialog.styles'

const CreateDepartmentsForm: React.FC<Props> = ({ close, confirm, opened }) => {
  const { control, handleSubmit, reset } = useForm<FormInput>()

  const [CreateDepartments, { loading }] = useMutation(
    getCreateDepartmentsMutation,
    {
      refetchQueries: [{ query: getDepartmentsQuery }],
    }
  )

  const onSubmit = async (inputs: FormInput) => {
    await CreateDepartments({
      variables: {
        skill: {
          name: inputs.name,
        },
      },
      onCompleted: () => {
        reset()
      },
    })
  }

  return (
    <Dialog open={opened} onClose={close}>
      <StyledDialogTitle>
        Create Department
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

export default CreateDepartmentsForm
