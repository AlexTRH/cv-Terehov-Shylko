import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Chip, CircularProgress, Typography } from '@mui/material'
import { UserResult } from '@graphql/users/users.types'
import { getUserQuery } from '@graphql/users/users.queries'
import Preloader from '@atoms/preloader/preloader.atom'
import * as Styled from './employee-skills.styles'

const EmployeeSkills = () => {
  const { id } = useParams()
  const { data, loading, error } = useQuery<UserResult>(getUserQuery, {
    variables: { id },
  })

  if (loading) {
    return <CircularProgress />
  }

  if (!data) {
    return <Typography variant="body1">No skills data available</Typography>
  }

  return (
    <Preloader loading={loading} error={error}>
      {data?.user.profile.skills.map(({ skill_name, mastery }) => (
        <Styled.Skill key={skill_name}>
          <Typography variant="body1" sx={{ mr: 2 }}>
            {skill_name}
          </Typography>
          <Chip label={mastery} variant="outlined" size="small" />
        </Styled.Skill>
      ))}
    </Preloader>
  )
}

export default memo(EmployeeSkills)
