import React from 'react'
import { useQuery } from '@apollo/client'
import { createTable } from '../../components/templates/table'
import { CVsTableTool } from '../../components/organisms/cvs-table-tool'
import { CVsTableHead } from '../../components/organisms/cvs-table-head'
import { CVsTableRow } from '../../components/organisms/cvs-table-row'
import { getCVsQuery } from '../../graphql/cvs/cvs.queries'
import { CVsResult } from '../../graphql/cvs/cvs.types'
import { ICV } from '../../interfaces/cv.interface'
import Preloader from '../../components/atoms/preloader/preloader.atom'

const Table = createTable<ICV>()

const CVsPage = () => {
  const { data, loading, error } = useQuery<CVsResult>(getCVsQuery)
  const cvsData = data?.cvs || []

  return (
    <Preloader loading={loading} error={error}>
      <Table
        items={cvsData}
        loading={loading}
        TableToolComponent={CVsTableTool}
        TableHeadComponent={CVsTableHead}
        TableRowComponent={CVsTableRow}
        searchBy={['name']}
        defaultSortBy="name"
      />
    </Preloader>
  )
}

export default React.memo(CVsPage)
