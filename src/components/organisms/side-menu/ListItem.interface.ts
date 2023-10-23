import { RoutesPath } from '@constants/routes.constants'

export interface ListItem {
  IconComponent?: React.ElementType
  DividerComponent?: React.ElementType
  name?: string
  to?: RoutesPath
}
