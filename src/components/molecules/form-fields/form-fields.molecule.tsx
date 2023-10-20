import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { FormInput } from '../../dialogs/skills/skill-dialog.types'
import { FieldNames, Render } from './form-fields.interface'
import { formFields } from './form-fields.data'
import FormField from './form-field.molecule'

interface FormFieldsProps {
  control: Control<FormInput, any>
}

const FormFields: React.FC<FormFieldsProps> = ({ control }) => {
  return (
    <>
      {formFields.map((field) => (
        <Controller
          key={field.name}
          control={control}
          name={field.name as FieldNames}
          render={({ field }) => (
            <div key={field.name}>
              <FormField label={field.name} {...field} />
            </div>
          )}
        />
      ))}
    </>
  )
}

export default FormFields
