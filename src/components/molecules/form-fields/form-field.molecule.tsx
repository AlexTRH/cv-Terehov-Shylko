import React from 'react'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import { ControllerRenderProps } from 'react-hook-form'

interface FieldProps extends ControllerRenderProps<any, any> {
  label: string
}

const FormField: React.FC<FieldProps> = ({ label, ...props }) => (
  <FormControl>
    <InputLabel htmlFor={props.name}>{label}</InputLabel>
    {props.name === 'template' ? (
      <FormControlLabel control={<Checkbox {...props} />} label={label} />
    ) : (
      <OutlinedInput id={props.name} label={label} {...props} />
    )}
  </FormControl>
)

export default FormField
