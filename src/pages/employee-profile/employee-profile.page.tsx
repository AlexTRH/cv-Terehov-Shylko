import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'
import { Typography } from '@mui/material'
import { getUserQuery } from '@graphql/users/users.queries'
import { UserResult } from '@graphql/users/users.types'
import { AvatarUpload } from '@molecules/avatar-upload'
import { EmployeeProfileForm } from '@organisms/employee-profile-form'
import * as Styled from './employee-profile.styles'

const EmployeeProfile = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const { data, loading } = useQuery<UserResult>(getUserQuery, {
    variables: { id },
  })

  if (loading || !data) {
    return null
  }

  return (
    <>
      <AvatarUpload user={data.user} />
      <Styled.ProfilePage>
        <Typography variant="h5">{data.user.profile.full_name}</Typography>
        <Typography>{data.user.email}</Typography>
        <Typography>
          {t('A member since')} {new Date(+data.user.created_at).toDateString()}
        </Typography>
      </Styled.ProfilePage>
      <EmployeeProfileForm user={data.user} />
    </>
  )
}

export default memo(EmployeeProfile)
