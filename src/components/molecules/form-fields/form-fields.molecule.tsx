import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import { Control, Controller } from 'react-hook-form'
import { FormInput } from '../../dialogs/skills/skill-dialog.types'
import { FieldNames, Render } from './form-fields.interface'
import { formFields } from './form-fields.data'

const NameField: React.FC<Render> = ({ field }) => (
  <FormControl>
    <InputLabel htmlFor="name">Name</InputLabel>
    <OutlinedInput id="name" label="Name" {...field} />
  </FormControl>
)

const DescriptionField: React.FC<Render> = ({ field }) => (
  <FormControl>
    <InputLabel htmlFor="description">Description</InputLabel>
    <OutlinedInput id="description" label="Description" {...field} />
  </FormControl>
)

const TemplateField: React.FC<Render> = ({ field }) => (
  <FormControl>
    <FormControlLabel control={<Checkbox {...field} />} label="Template" />
  </FormControl>
)

interface Props {
  control: Control<FormInput, any>
}

const FormFields: React.FC<Props> = ({ control }) => {
  return (
    <>
      {formFields.map((field) => (
        <Controller
          key={field.name}
          control={control}
          name={field.name as FieldNames}
          render={({ field }) => (
            <div>
              {field.name === 'name' && <NameField field={field} />}
              {field.name === 'description' && (
                <DescriptionField field={field} />
              )}
              {field.name === 'template' && <TemplateField field={field} />}
            </div>
          )}
        />
      ))}
    </>
  )
}

export default FormFields
