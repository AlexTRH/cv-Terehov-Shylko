import { gql } from '@apollo/client'

export const getCVsQuery = gql`
  query CVS {
    cvs {
      id
      name
      user {
        id
        email
      }
      is_template
    }
  }
`
