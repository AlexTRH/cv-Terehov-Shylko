import { useForm, FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, TextField } from '@mui/material'
import { DepartmentSelect } from '@molecules/department-select'
import { PositionSelect } from '@molecules/position-select'
import { useUserUpdate } from '@hooks/use-users.hook'
import { useUser } from '@hooks/use-user.hook'
import {
  EmployeeProfileFormProps,
  EmployeeProfileFormValues,
} from './employee-profile-form.types'
import * as Styled from './employee-profile-form.styles'
import { setDefaultUserValues } from '@helpers/user.helper'

export const EmployeeProfileForm = ({ user }: EmployeeProfileFormProps) => {
  const [updateUser, loading] = useUserUpdate()
  const { user$, isAdmin } = useUser()
  const { t } = useTranslation()
  const userRoleId = user$?.id

  const methods = useForm<EmployeeProfileFormValues>({
    defaultValues: setDefaultUserValues(user),
  })
  const {
    formState: { isDirty },
    register,
    handleSubmit,
    reset,
  } = methods

  const onSubmit = (values: EmployeeProfileFormValues) => {
    updateUser({
      variables: {
        id: user.id,
        user: {
          profile: {
            first_name: values.first_name,
            last_name: values.last_name,
          },
          departmentId: values.department,
          positionId: values.position,
          role: user.role,
        },
      },
    }).then(({ data }) => data && reset(setDefaultUserValues(data.updateUser)))
  }

  return (
    <FormProvider {...methods}>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('first_name')} label={t('First Name')} />
        <TextField {...register('last_name')} label={t('Last Name')} />
        <DepartmentSelect name="department" />
        <PositionSelect name="position" />
        {(isAdmin || userRoleId === user.id) && (
          <Button
            type="submit"
            variant="contained"
            disabled={!isDirty || loading}
            sx={{ gridColumn: 2 }}
          >
            {t('Update')}
          </Button>
        )}
      </Styled.Form>
    </FormProvider>
  )
}
