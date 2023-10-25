import { useQuery } from '@apollo/client'
import { PageLoader } from '@atoms/page-loader'
import { createTable } from '@templates/table'
import { DepartmentsTableTool } from '@organisms/departments-table-tool'
import { DepartmentsTableHead } from '@organisms/departments-table-head'
import { DepartmentsTableRow } from '@organisms/departments-table-row'
import { getDepartmentsQuery } from '@graphql/departments/departments.queries'
import { IDepartment } from '@interfaces/department.interface'
import Preloader from '@atoms/preloader/preloader.atom'

const Table = createTable<IDepartment>()

type DepartmentsResult = {
  departments: IDepartment[]
}

const DepartmentsPage = () => {
  const { data, loading, error } =
    useQuery<DepartmentsResult>(getDepartmentsQuery)

  return (
    <Preloader loading={loading} error={error}>
      <Table
        items={data?.departments || []}
        TableToolComponent={DepartmentsTableTool}
        TableHeadComponent={DepartmentsTableHead}
        TableRowComponent={DepartmentsTableRow}
        searchBy={['name']}
        defaultSortBy="name"
        loading={loading}
      />
    </Preloader>
  )
}

export default DepartmentsPage
