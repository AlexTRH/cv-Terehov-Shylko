import { useMutation } from '@apollo/client'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Dialog, DialogContent, IconButton } from '@mui/material'
import { useForm } from 'react-hook-form'
import {
  getCreateDepartmentsMutation,
  getDepartmentsQuery,
} from '../../../graphql/departments/departments.queries'
import { StyledBox, StyledDialogTitle } from './departments-dialog.styles'
import { FormInput } from './departments-dialog.types'
import FormFields from '../../molecules/form-fields/form-fields.molecule'

interface Props {
  opened: boolean
  close: () => void
  confirm: () => void
}

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
    })

    reset()
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
