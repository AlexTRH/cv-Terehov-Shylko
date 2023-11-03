import { gql } from '@apollo/client'

export const getDepartmentsQuery = gql`
  query Departments {
    departments {
      id
      name
      created_at
    }
  }
`

export const getCreateDepartmentsMutation = gql`
  mutation CreateDepartment($department: DepartmentInput!) {
    createDepartment(department: $department) {
      id
      created_at
      name
    }
  }
`

export const getDeleteDepartmentsMutation = gql`
  mutation DeleteDepartment($id: ID!) {
    deleteDepartment(id: $id) {
      affected
    }
  }
`

export const getUpdateDepartmentsMutation = gql`
  mutation UpdateDepartment($id: ID!, $department: DepartmentInput!) {
    updateDepartment(id: $id, department: $department) {
      id
      created_at
      name
    }
  }
`
