import { useMutation } from '@apollo/client'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Dialog, DialogContent, IconButton } from '@mui/material'
import { useForm } from 'react-hook-form'
import {
  getUpdateDepartmentsMutation,
  getDepartmentsQuery,
} from '../../../graphql/departments/departments.queries'
import { StyledBox, StyledDialogTitle } from './departments-dialog.styles'
import { FormInput } from './departments-dialog.types'
import FormFields from '../../molecules/form-fields/form-fields.molecule'

interface Props {
  opened: boolean
  close: () => void
  confirm: () => void
  id: string
}

const UpdateDepartmentsForm: React.FC<Props> = ({
  close,
  confirm,
  opened,
  id,
}) => {
  const { control, handleSubmit, reset } = useForm<FormInput>()

  const [UpdateDepartments] = useMutation(getUpdateDepartmentsMutation, {
    refetchQueries: [{ query: getDepartmentsQuery }],
  })

  const onSubmit = async (inputs: FormInput) => {
    await UpdateDepartments({
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
        Update Department
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

export default UpdateDepartmentsForm
