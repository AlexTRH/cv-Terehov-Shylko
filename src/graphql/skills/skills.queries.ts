import { gql } from '@apollo/client'

export const getSkillsQuery = gql`
  query Skills {
    skills {
      id
      name
    }
  }
`

export const getCreateSkillMutation = gql`
  mutation CreateSkill($skill: SkillInput!) {
    createSkill(skill: $skill) {
      id
      name
    }
  }
`

export const getUpdateSkillMutation = gql`
  mutation UpdateSkill($id: ID!, $skill: SkillInput!) {
    updateSkill(id: $id, skill: $skill) {
      id
      name
    }
  }
`

export const getDeleteSkillMutation = gql`
  mutation DeleteSkill($id: ID!) {
    deleteSkill(id: $id) {
      affected
    }
  }
`
