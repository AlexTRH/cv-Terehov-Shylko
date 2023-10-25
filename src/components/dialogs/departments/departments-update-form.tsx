import { useMutation } from '@apollo/client'
import CloseIcon from '@mui/icons-material/Close'
import { useForm } from 'react-hook-form'
import { Button, Dialog, DialogContent, IconButton } from '@mui/material'
import { useCallback } from 'react'
import {
  getDepartmentsQuery,
  getUpdateDepartmentsMutation,
} from '@graphql/departments/departments.queries'
import FormFields from '@molecules/form-fields/form-fields.molecule'
import { UpdateFormProps } from '@dialogs/departments/departments-update-form.interface'
import { FormInput } from './departments-dialog.types'
import { StyledBox, StyledDialogTitle } from './departments-dialog.styles'

const [UpdateDepartments] = useMutation(getUpdateDepartmentsMutation, {
  refetchQueries: [{ query: getDepartmentsQuery }],
})

const UpdateDepartmentsForm: React.FC<UpdateFormProps> = ({
  close,
  confirm,
  opened,
  id,
}) => {
  const { control, handleSubmit, reset } = useForm<FormInput>()

  const onSubmit = useCallback(
    async (inputs: FormInput) => {
      await UpdateDepartments({
        variables: {
          id,
          skill: {
            name: inputs.name,
          },
        },
      })

      reset()
    },
    [UpdateDepartments, id, reset]
  )

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
