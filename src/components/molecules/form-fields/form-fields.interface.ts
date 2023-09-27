import { ControllerRenderProps } from 'react-hook-form'
import { FormInput } from '../../dialogs/skills/skill-dialog.types'

export type FieldNames = 'name' | 'description' | 'template'

export interface Render {
  field: ControllerRenderProps<FormInput, FieldNames>
}

export interface FormField {
  name: FieldNames
}
