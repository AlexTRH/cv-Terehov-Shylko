import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { CircularProgress } from '@mui/material'
import { UserResult } from '@graphql/users/users.types'
import { getUserCVsQuery } from '@graphql/users/users.queries'
import Preloader from '@atoms/preloader/preloader.atom'

const EmployeeCvs = () => {
  const { id } = useParams()
  const { data, loading, error } = useQuery<UserResult>(getUserCVsQuery, {
    variables: { id },
  })
  const cvs = data?.user?.cvs || []

  if (loading) {
    return <CircularProgress />
  }

  if (!cvs.length) {
    return <p>No CVs available.</p>
  }

  return (
    <Preloader loading={loading} error={error}>
      {cvs.map((cv) => (
        <div key={cv.name}>{cv.name}</div>
      ))}
    </Preloader>
  )
}

export default memo(EmployeeCvs)
