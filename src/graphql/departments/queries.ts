import { gql } from '@apollo/client'

export const getDepartmentsQuery = gql`
  query Departments {
    departments {
      id
      name
    }
  }
`
