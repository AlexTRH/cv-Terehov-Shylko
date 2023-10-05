import { useQuery } from '@apollo/client'
import { PageLoader } from '../../components/atoms/page-loader/page-loader.atom'
import { createTable } from '../../components/templates/table'
import { SkillsTableConfirm } from '../../components/organisms/skills-table-tool/skills-table-tool.organism'
import { SkillsTableHead } from '../../components/organisms/skills-table-head/skills-table-head.organism'
import { SkillsTableRow } from '../../components/organisms/skills-table-row/skills-table-row.organism'
import { getSkillsQuery } from '../../graphql/skills/skills.queries'
import { ISkill } from '../../interfaces/skill.interface'
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
