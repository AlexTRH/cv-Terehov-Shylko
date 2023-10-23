import { MutationFunction, useMutation } from '@apollo/client'
import {
  getCreateProjectMutation,
  getDeleteProjectMutation,
  getProjectsQuery,
} from '@graphql/projects/projects.queries'
import { CreateProjectResult } from '@graphql/projects/projects.types'
import { IProject } from '@interfaces/project.interface'

export const useProjectCreate = (): [
  MutationFunction<CreateProjectResult>,
  boolean,
] => {
  const [createProject, { loading }] = useMutation<CreateProjectResult>(
    getCreateProjectMutation,
    {
      refetchQueries: [getProjectsQuery],
    }
  )
  return [createProject, loading]
}

export const useProjectDelete = (
  item: IProject
): [MutationFunction, boolean] => {
  const [deleteProject, { loading }] = useMutation(getDeleteProjectMutation, {
    update(cache) {
      const id = cache.identify({ id: item.id, __typename: 'Project' })
      cache.evict({ id })
      cache.gc()
    },
  })

  return [deleteProject, loading]
}
