import { useQuery } from '@apollo/client'
import { PageLoader } from '../../components/atoms/page-loader/page-loader.atom'
import { createTable } from '../../components/templates/table'
import { DepartmentsTableTool } from '../../components/organisms/departments-table-tool/departments-table-tool.organism'
import { DepartmentsTableHead } from '../../components/organisms/departments-table-head/departments-table-head.organism'
import { DepartmentsTableRow } from '../../components/organisms/departments-table-row/departments-table-row.organism'
import { getDepartmentsQuery } from '../../graphql/departments/departments.queries'
import { IDepartment } from '../../interfaces/department.interface'

const Table = createTable<IDepartment>()

type DepartmentsResult = {
  departments: IDepartment[]
}

const DepartmentsPage = () => {
  const { data, loading, error } =
    useQuery<DepartmentsResult>(getDepartmentsQuery)

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <Table
          items={data?.departments || []}
          TableToolComponent={DepartmentsTableTool}
          TableHeadComponent={DepartmentsTableHead}
          TableRowComponent={DepartmentsTableRow}
          searchBy={['name']}
          defaultSortBy="name"
          loading={loading}
        />
      )}
    </>
  )
}

export default DepartmentsPage
