import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(
  name: string,
  salary: number,
  department: string,
  position: string,
  workExp: number
) {
  return { name, salary, department, position, workExp }
}

const rows = [
  createData('Java Guy', 300, 'Java', 'J', 0.5),
  createData('Python Gay', 1000, 'Python', 'M', 2),
  createData('Swift Looser', 10, 'iOS', 'J--', 20),
  createData('C++ Lord', 5000, 'C', 'S', 3),
  createData('React Master', 10000, 'React', 'SSS', 100),
]

export default function EmployeesPage() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employees</TableCell>
            <TableCell align="right">Salary&nbsp;($) </TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Work Experience&nbsp;(years)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.salary}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.workExp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
