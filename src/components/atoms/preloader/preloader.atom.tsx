import { ApolloError } from '@apollo/client'
import { CircularProgress } from '@mui/material'

import { StyledBox } from './preloader.styles'

interface Props {
  loading: boolean
  error?: ApolloError
  children: JSX.Element | JSX.Element[]
}

const Preloader: React.FC<Props> = ({ loading, error, children }) => {
  if (loading) {
    return (
      <StyledBox margin={5}>
        <CircularProgress />
      </StyledBox>
    )
  }

  if (error) {
    return <StyledBox margin={5}>{error.message}</StyledBox>
  }
  return <>{children}</>
}

export default Preloader
