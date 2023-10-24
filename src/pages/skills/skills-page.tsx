import { useQuery } from '@apollo/client'
import { PageLoader } from '@atoms/page-loader'
import { createTable } from '@templates/table'
import { SkillsTableConfirm } from '@organisms/skills-table-tool/skills-table-tool.organism'
import { SkillsTableHead } from '@organisms/skills-table-head/skills-table-head.organism'
import { SkillsTableRow } from '@organisms/skills-table-row/skills-table-row.organism'
import { getSkillsQuery } from '@graphql/skills/skills.queries'
import { ISkill } from '@interfaces/skill.interface'
import { SkillsResult } from './skills-page.type'

const Table = createTable<ISkill>()

const SkillsPage = () => {
  const { data, loading, error } = useQuery<SkillsResult>(getSkillsQuery)

  if (loading) {
    return <PageLoader />
  }

  return (
    <Table
      items={data?.skills || []}
      TableToolComponent={SkillsTableConfirm}
      TableHeadComponent={SkillsTableHead}
      TableRowComponent={SkillsTableRow}
      searchBy={['name']}
      defaultSortBy="name"
      loading={loading}
    />
  )
}

export default SkillsPage
