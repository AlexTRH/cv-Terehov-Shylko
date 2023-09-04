import { gql } from '@apollo/client'

export const getPositionsQuery = gql`
  query Positions {
    positions {
      id
      name
    }
  }
`

export const getCreatePositionMutation = gql`
  mutation CreatePosition($position: PositionInput!) {
    createPosition(position: $position) {
      id
      name
    }
  }
`

export const getUpdatePositionMutation = gql`
  mutation UpdatePosition($id: ID!, $position: PositionInput!) {
    updatePosition(id: $id, position: $position) {
      id
      name
    }
  }
`

export const getDeletePositionMutation = gql`
  mutation DeletePosition($id: ID!) {
    deletePosition(id: $id) {
      affected
    }
  }
`
