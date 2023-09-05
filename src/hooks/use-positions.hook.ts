import { MutationFunction, useMutation, useQuery } from '@apollo/client'
import { IPosition } from '../interfaces/position.interface'
import {
  getCreatePositionMutation,
  getDeletePositionMutation,
  getPositionsQuery,
  getUpdatePositionMutation,
} from '../graphql/positions/positions.queries'
import {
  CreatePositionResult,
  PositionsResult,
  UpdatePositionResult,
} from '../graphql/positions/positions.types'

export const usePositions = (): [IPosition[], boolean] => {
  const { data, loading } = useQuery<PositionsResult>(getPositionsQuery)

  return [data?.positions || [], loading]
}

export const usePositionCreate = (): [
  MutationFunction<CreatePositionResult>,
  boolean,
] => {
  const [createPosition, { loading }] = useMutation<CreatePositionResult>(
    getCreatePositionMutation,
    {
      refetchQueries: [getPositionsQuery],
    }
  )
  return [createPosition, loading]
}

export const usePositionUpdate = (): [
  MutationFunction<UpdatePositionResult>,
  boolean,
] => {
  const [updatePosition, { loading }] = useMutation<UpdatePositionResult>(
    getUpdatePositionMutation
  )
  return [updatePosition, loading]
}

export const usePositionDelete = (item: IPosition) => {
  const [deletePosition] = useMutation(getDeletePositionMutation, {
    variables: {
      id: item.id,
    },
    update(cache) {
      const id = cache.identify({ id: item.id, __typename: 'Position' })
      cache.evict({ id })
      cache.gc()
    },
  })
  return [deletePosition]
}
