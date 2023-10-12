import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Chip, CircularProgress, Typography } from '@mui/material'
import { UserResult } from 'graphql/users/users.types'
import { getUserQuery } from '../../graphql/users/users.queries'
import * as Styled from './employee-languages.styles'

const EmployeeLanguages = () => {
  const { id } = useParams()
  const { data, loading } = useQuery<UserResult>(getUserQuery, {
    variables: { id },
  })

  if (loading || !data) {
    return <CircularProgress />
  }

  return (
    <div>
      {data?.user.profile.languages.map(({ language_name, proficiency }) => (
        <Styled.Language key={language_name}>
          <Typography variant="body1" sx={{ mr: 2 }}>
            {language_name}
          </Typography>
          <Chip label={proficiency} variant="outlined" size="small" />
        </Styled.Language>
      ))}
    </div>
  )
}

export default memo(EmployeeLanguages)
