import { useQuery } from '@apollo/client'
import { PageLoader } from '../../components/atoms/page-loader/page-loader.atom'
import { createTable } from '../../components/templates/table'
import { ProjectsTableConfirm } from '../../components/organisms/projects-table-tool/projects-table-tool.organism'
import { ProjectsTableHead } from '../../components/organisms/projects-table-head/projects-table-head.organism'
import { ProjectsTableRow } from '../../components/organisms/projects-table-row/projects-table-row.organism'
import { getProjectsQuery } from '../../graphql/projects/projects.queries'
import { IProject } from '../../interfaces/project.interface'

const Table = createTable<IProject>()

type ProjectsResult = {
  projects: IProject[]
}

const ProjectsPage = () => {
  const { data, loading, error } = useQuery<ProjectsResult>(getProjectsQuery)

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <Table
          items={data?.projects || []}
          TableToolComponent={ProjectsTableConfirm}
          TableHeadComponent={ProjectsTableHead}
          TableRowComponent={ProjectsTableRow}
          searchBy={['name']}
          defaultSortBy="name"
          loading={loading}
        />
      )}
    </>
  )
}

export default ProjectsPage