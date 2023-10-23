import {
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  OutlinedInput
} from '@mui/material'
import { Controller } from 'react-hook-form'
import {FormFieldsProps, Render, FormField} from './FormFields.types'



const FormFields: React.FC<FormFieldsProps> = ({ control }) => {
  const formFields: FormField[] = [
    {
      name: 'name',
      defaultValue: '',
      render: ({ field }: Render) => (
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <OutlinedInput id="name" label="Name" {...field} />
        </FormControl>
      )
    },
    {
      name: 'description',
      defaultValue: '',
      render: ({ field }: Render) => (
        <FormControl>
          <InputLabel htmlFor="description">Description</InputLabel>
          <OutlinedInput id="description" label="Description" {...field} />
        </FormControl>
      )
    },
    {
      name: 'template',
      defaultValue: false,
      render: ({ field }: Render) => (
        <FormControl>
          <FormControlLabel
            control={<Checkbox {...field} />}
            label="Template"
          />
        </FormControl>
      )
    }
  ]

  return (
    <>
      {formFields.map((field) => (
        <Controller key={field.name} control={control} {...field} />
      ))}
    </>
  )
}

export default FormFields