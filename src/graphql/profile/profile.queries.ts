import { gql } from '@apollo/client'

export const getUploadAvatarMutation = gql`
  mutation UploadAvatar($id: ID!, $avatar: AvatarInput!) {
    uploadAvatar(id: $id, avatar: $avatar)
  }
`

export const getDeleteAvatarMutation = gql`
  mutation DeleteAvatar($id: ID!) {
    deleteAvatar(id: $id)
  }
`
