import { gql } from '@apollo/client'

export const getUsersQuery = gql`
  query Users {
    users {
      id
      email
      profile {
        id
        first_name
        last_name
        full_name
        avatar
      }
      department_name
      position_name
      role
    }
  }
`

export const getUserQuery = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      created_at
      email
      profile {
        id
        first_name
        last_name
        full_name
        avatar
        skills {
          skill_name
          mastery
        }
        languages {
          language_name
          proficiency
        }
      }
      cvs {
        id
      }
      department {
        id
        name
      }
      position {
        id
        name
      }
      role
    }
  }
`

export const getUserFullNameQuery = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      email
      profile {
        id
        full_name
      }
    }
  }
`

export const getUserCVsQuery = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      cvs {
        id
        created_at
        name
      }
    }
  }
`

export const getCreateUserMutation = gql`
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      profile {
        id
        first_name
        last_name
        full_name
      }
      department {
        id
        name
      }
      position {
        id
        name
      }
    }
  }
`

export const getUpdateUserMutation = gql`
  mutation UpdateUser($id: ID!, $user: UpdateUserInput!) {
    updateUser(id: $id, user: $user) {
      id
      profile {
        id
        first_name
        last_name
        full_name
        skills {
          skill_name
          mastery
        }
        languages {
          language_name
          proficiency
        }
      }
      department {
        id
        name
      }
      position {
        id
        name
      }
    }
  }
`

export const getDeleteUserMutation = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      affected
    }
  }
`
