import CloseIcon from '@mui/icons-material/Close'
import { Button, Dialog, DialogContent, IconButton } from '@mui/material'
import { useForm } from 'react-hook-form'
import {
  StyledBox,
  StyledDialogTitle,
} from './skills-dialog.styles'
import { FormInput } from './skill-dialog.types'
import FormFields from '../../molecules/form-fields/form-fields.molecule'
import { SkillsProps } from './skills.interface'

const SkillsTemplate: React.FC<SkillsProps> = ({ close, confirm, opened, onSubmit, title }) => {
  const { control, handleSubmit } = useForm<FormInput>()

  return (
    <Dialog open={opened} onClose={close}>
      <StyledDialogTitle>
        {title}
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

export default SkillsTemplate