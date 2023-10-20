import { useQuery } from '@apollo/client'
import { createTable } from '@templates/table'
import { ProjectsTableConfirm } from '@organisms/projects-table-tool/projects-table-tool.organism'
import { ProjectsTableHead } from '@organisms/projects-table-head/projects-table-head.organism'
import { ProjectsTableRow } from '@organisms/projects-table-row/projects-table-row.organism'
import { getProjectsQuery } from '@graphql/projects/projects.queries'
import { IProject } from '@interfaces/project.interface'
import { ProjectsResult } from './projects-page.type'
import Preloader from '@atoms/preloader/preloader.atom'

const Table = createTable<IProject>()

const ProjectsPage = () => {
  const { data, loading, error } = useQuery<ProjectsResult>(getProjectsQuery)

  return (
    <Preloader loading={loading} error={error}>
      <Table
        items={data?.projects || []}
        TableToolComponent={ProjectsTableConfirm}
        TableHeadComponent={ProjectsTableHead}
        TableRowComponent={ProjectsTableRow}
        searchBy={['name']}
        defaultSortBy="name"
        loading={loading}
      />
    </Preloader>
  )
}

export default ProjectsPage
