import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { CircularProgress } from '@mui/material'
import { UserResult } from 'graphql/users/users.types'
import { getUserCVsQuery } from '../../graphql/users/users.queries'

const EmployeeCvs = () => {
  const { id } = useParams()
  const { data, loading } = useQuery<UserResult>(getUserCVsQuery, {
    variables: { id },
  })

  if (loading) {
    return <CircularProgress />
  }

  const cvs = data?.user?.cvs || []

  return (
    <div>
      {cvs.length === 0 ? (
        <p>No CVs available.</p>
      ) : (
        cvs.map((cv) => <div key={cv.name}>{cv.name}</div>)
      )}
    </div>
  )
}

export default memo(EmployeeCvs)
