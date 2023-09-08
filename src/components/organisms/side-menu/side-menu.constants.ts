import {
  ContactPageOutlined,
  Domain,
  FolderCopyOutlined,
  Group,
  Translate,
  TrendingUp,
  WorkOutline,
} from '@mui/icons-material'
import { Divider } from '@mui/material'
import { RoutesPath } from '../../../constants/routes.constants'

interface ListItem {
  IconComponent?: React.ElementType
  DividerComponent?: React.ElementType
  name?: string
  to?: RoutesPath
}

export const LIST_ITEMS: ListItem[] = [
  {
    IconComponent: Group,
    name: 'employees',
    to: RoutesPath.Main,
  },
  {
    IconComponent: FolderCopyOutlined,
    name: 'projects',
    to: RoutesPath.Projects,
  {
    IconComponent: ContactPageOutlined,
    name: 'cvs',
    to: RoutesPath.Cvs,
  },
  {
    DividerComponent: Divider,
  },
  {
    IconComponent: Domain,
    name: 'departments',
    to: RoutesPath.Departments,
  },
  {
    IconComponent: WorkOutline,
    name: 'positions',
    to: RoutesPath.Positions,
  },
  {
    IconComponent: TrendingUp,
    name: 'skills',
    to: RoutesPath.Skills,
  },
  {
    IconComponent: Translate,
    name: 'languages',
    to: RoutesPath.Languages,
  },
]
