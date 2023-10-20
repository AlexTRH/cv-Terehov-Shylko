import { useQuery } from '@apollo/client'
import { IDepartment } from '@interfaces/department.interface'
import { getDepartmentsQuery } from '@graphql/departments/departments.queries'
import { DepartmentsResult } from '@graphql/departments/departments.types'

export const useDepartments = (): [IDepartment[], boolean] => {
  const { data, loading } = useQuery<DepartmentsResult>(getDepartmentsQuery)

  return [data?.departments || [], loading]
}
