import { memo, useContext } from 'react'
import { TableSortLabel } from '@mui/material'
import { Path } from 'react-hook-form'
import { TableSortContext } from '../../templates/table/table.context'
import { SortLabelProps } from './sort-label.types'
import { changeOrder } from '../../../helpers/table-sort.helper'
import { Item } from '../../templates/table/table.types'

const SortLabel = <K extends string>({
  column,
  children,
  ...props
}: SortLabelProps<K>) => {
  const { sortBy, order, setSortBy, setOrder } = useContext(TableSortContext)
  const active = sortBy === column

  const handleClick = () => {
    if (active) {
      setOrder(changeOrder)
    }
    setSortBy(column)
  }

  return (
    <TableSortLabel
      {...props}
      active={active}
      direction={order}
      onClick={handleClick}
    >
      {children}
    </TableSortLabel>
  )
}

const SortLabelComponent = memo(SortLabel)

export const createSortLabel = <T extends Item>(
  column: Path<T>,
  label: string
) => <SortLabelComponent column={column}>{label}</SortLabelComponent>
