import { MutationFunction, useMutation, useQuery } from '@apollo/client'
import {
  CreateUserResult,
  UpdateUserInput,
  UpdateUserResult,
  UsersResult,
} from '@graphql/users/users.types'
import { IUser } from '@interfaces/user.interface'
import {
  getCreateUserMutation,
  getDeleteUserMutation,
  getUpdateUserMutation,
  getUsersQuery,
} from '@graphql/users/users.queries'

export const useUsers = (): [IUser[], boolean] => {
  const { data, loading } = useQuery<UsersResult>(getUsersQuery)
  return [data?.users || [], loading]
}

export const useUserCreate = (): [
  MutationFunction<CreateUserResult>,
  boolean,
] => {
  const [createUser, { loading }] = useMutation<CreateUserResult>(
    getCreateUserMutation,
    {
      refetchQueries: [getUsersQuery],
    }
  )
  return [createUser, loading]
}

export const useUserUpdate = (): [
  MutationFunction<UpdateUserResult, UpdateUserInput>,
  boolean,
] => {
  const [updateUser, { loading }] = useMutation<
    UpdateUserResult,
    UpdateUserInput
  >(getUpdateUserMutation)
  return [updateUser, loading]
}

export const useUserDelete = (item: IUser): [MutationFunction, boolean] => {
  const [deleteUser, { loading }] = useMutation(getDeleteUserMutation, {
    update(cache) {
      const id = cache.identify({ id: item.id, __typename: 'User' })
      cache.evict({ id })
      cache.gc()
    },
  })

  return [deleteUser, loading]
}
