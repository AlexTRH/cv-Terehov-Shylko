import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Chip, CircularProgress, Typography } from '@mui/material'
import { UserResult } from '@graphql/users/users.types'
import { getUserQuery } from '@graphql/users/users.queries'
import * as Styled from './employee-skills.styles'

const EmployeeSkills = () => {
  const { id } = useParams()
  const { data, loading } = useQuery<UserResult>(getUserQuery, {
    variables: { id },
  })

  if (loading) {
    return <CircularProgress />
  }

  if (!data) {
    return <Typography variant="body1">No skills data available</Typography>
  }

  return (
    <>
      {data?.user.profile.skills.map(({ skill_name, mastery }) => (
        <Styled.Skill key={skill_name}>
          <Typography variant="body1" sx={{ mr: 2 }}>
            {skill_name}
          </Typography>
          <Chip label={mastery} variant="outlined" size="small" />
        </Styled.Skill>
      ))}
    </>
  )
}

export default memo(EmployeeSkills)
