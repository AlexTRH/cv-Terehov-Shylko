import { useParams } from 'react-router-dom'
import { MutationFunction, useMutation } from '@apollo/client'
import { UploadAvatarResult } from 'graphql/profile/profile.types'
import {
  getDeleteAvatarMutation,
  getUploadAvatarMutation,
} from '../graphql/profile/profile.queries'
import { getUserQuery } from '../graphql/users/users.queries'

export const useAvatarUpload = (): [
  MutationFunction<UploadAvatarResult>,
  boolean,
] => {
  const { id } = useParams()

  const [uploadAvatar, { loading }] = useMutation<UploadAvatarResult>(
    getUploadAvatarMutation,
    {
      refetchQueries: [{ query: getUserQuery, variables: { id } }],
    }
  )

  return [uploadAvatar, loading]
}

export const useAvatarDelete = (): [MutationFunction, boolean] => {
  const { id } = useParams()

  const [deleteAvatar, { loading }] = useMutation(getDeleteAvatarMutation, {
    refetchQueries: [{ query: getUserQuery, variables: { id } }],
  })

  return [deleteAvatar, loading]
}
