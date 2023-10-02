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
export const unbindCv = gql`
  mutation UnbindCv($id: ID!) {
    unbindCv(id: $id) {
      id
      created_at
      name
      description
      user {
        id
        email
      }
      is_template
    }
  }
`

export const updateCv = gql`
  mutation UpdateCv($id: ID!, $cv: CvInput!) {
    updateCv(id: $id, cv: $cv) {
      id
      created_at
      name
      description
      user {
        id
        email
      }
      is_template
    }
  }
`

export const createCv = gql`
  mutation CreateCv($cv: CvInput!) {
    createCv(cv: $cv) {
      id
      created_at
      name
      description
      skills {
        skill_name
        mastery
      }
      languages {
        language_name
        proficiency
      }
      is_template
    }
  }
`