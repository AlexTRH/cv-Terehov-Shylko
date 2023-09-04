import { gql } from '@apollo/client'

export const getProjectsQuery = gql`
  query Projects {
    projects {
      id
      name
      internal_name
      domain
      start_date
      end_date
      team_size
    }
  }
`

export const getCreateProjectMutation = gql`
  mutation CreateProject($project: ProjectInput!) {
    createProject(project: $project) {
      id
      name
      internal_name
      description
      domain
      start_date
      end_date
      team_size
    }
  }
`

export const getDeleteProjectMutation = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      affected
    }
  }
`
