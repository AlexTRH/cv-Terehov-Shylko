import * as React from 'react'
import { createTable } from '../../components/templates/table'
import { UsersTableTool } from '../../components/organisms/users-table-tool'
import { UsersTableHead } from '../../components/organisms/users-table-head'
import { UsersTableRow } from '../../components/organisms/users-table-row'
import { IUser } from '../../interfaces/user.interface'
import { useUsers } from '../../hooks/use-users.hook'

const Table = createTable<IUser>()

export default function EmployeesPage() {
  const [users, loading] = useUsers()
  return (
    <div>
      <Table
        items={users}
        loading={loading}
        TableToolComponent={UsersTableTool}
        TableHeadComponent={UsersTableHead}
        TableRowComponent={UsersTableRow}
        searchBy={['email', 'profile.first_name', 'profile.last_name']}
        defaultSortBy="department_name"
      />
    </div>
  )
}
