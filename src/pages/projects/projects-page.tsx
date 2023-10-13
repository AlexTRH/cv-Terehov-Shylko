import { useQuery } from '@apollo/client'
import { PageLoader } from '../../components/atoms/page-loader/page-loader.atom'
import { createTable } from '../../components/templates/table'
import { ProjectsTableTool } from '../../components/organisms/projects-table-tool/projects-table-tool.organism'
import { ProjectsTableHead } from '../../components/organisms/projects-table-head/projects-table-head.organism'
import { ProjectsTableRow } from '../../components/organisms/projects-table-row/projects-table-row.organism'
import { getProjectsQuery } from '../../graphql/projects/projects.queries'
import { IProject } from '../../interfaces/project.interface'
import { ProjectsResult } from './projects-page.type'
import { memo } from 'react'

const Table = createTable<IProject>()

const Projects = () => {
  const { data, loading } = useQuery<ProjectsResult>(getProjectsQuery)

  return (
    <div>
      <Table
        items={data?.projects || []}
        loading={loading}
        TableToolComponent={ProjectsTableTool}
        TableHeadComponent={ProjectsTableHead}
        TableRowComponent={ProjectsTableRow}
        searchBy={['name', 'internal_name']}
        defaultSortBy="internal_name"
      />
    </div>
  )
}

export default memo(Projects)
