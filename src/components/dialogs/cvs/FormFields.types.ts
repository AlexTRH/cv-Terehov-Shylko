import { Control, ControllerRenderProps } from 'react-hook-form'
import { CreateCvFormInput } from '../../dialogs/cvs/CreateCvForm.types'

export interface FormFieldsProps {
  control: Control<CreateCvFormInput, any>
}

export type FieldNames = 'name' | 'description' | 'template'

export interface Render {
  field: ControllerRenderProps<CreateCvFormInput, FieldNames>
}

export interface FormField {
  name: FieldNames
  defaultValue?: string | boolean | undefined
  render: (renderParam: Render) => JSX.Element
}
