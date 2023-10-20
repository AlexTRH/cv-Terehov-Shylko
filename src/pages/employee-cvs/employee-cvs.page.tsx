import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { CircularProgress } from '@mui/material'
import { UserResult } from 'graphql/users/users.types'
import { getUserCVsQuery } from '../../graphql/users/users.queries'
import Preloader from '../../components/atoms/preloader/preloader.atom'

const EmployeeCvs = () => {
  const { id } = useParams()
  const { data, loading, error } = useQuery<UserResult>(getUserCVsQuery, {
    variables: { id },
  })

  if (loading) {
    return <CircularProgress />
  }

  const cvs = data?.user?.cvs || []

  return (
    <Preloader loading={loading} error={error}>
      <div>
        {cvs.length === 0 ? (
          <p>No CVs available.</p>
        ) : (
          cvs.map((cv) => <div key={cv.name}>{cv.name}</div>)
        )}
      </div>
    </Preloader>
  )
}

export default memo(EmployeeCvs)
