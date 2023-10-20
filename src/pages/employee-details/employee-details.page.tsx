import { memo, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Tab } from '@mui/material'
import { PersonOutline } from '@mui/icons-material'
import { PageLoader } from '../../components/atoms/page-loader'
import { useBreadcrumbs } from '../../hooks/use-breadcrumbs.hook'
import { getUserFullNameQuery } from '../../graphql/users/users.queries'
import { UserResult } from '../../graphql/users/users.types'
import * as Styled from './employee-details.styles'
import { RoutesPath } from '../../constants/routes.constants'

const EmployeeDetails = () => {
  const location = useLocation()
  const params = useParams()
  const { t } = useTranslation()
  const id = params?.id

  if (!id) {
    return <div>Ошибка: ID не найден</div>
  }

  const path = RoutesPath.Employee_profile.replace(':id', id)

  const { data } = useQuery<UserResult>(getUserFullNameQuery, {
    variables: { id },
  })

  useBreadcrumbs({
    [path]: {
      text: data?.user.profile.full_name || data?.user.email,
      to: `${path}/profile`,
      color: 'primary',
      Icon: PersonOutline,
    },
  })

  return (
    <>
      <Styled.Tabs value={location.pathname}>
        <Tab
          value={`${path}/profile`}
          label={t('Profile')}
          component={NavLink}
          to={`${path}/profile`}
        />
        <Tab
          value={`${path}/skills`}
          label={t('skills')}
          component={NavLink}
          to={`${path}/skills`}
        />
        <Tab
          value={`${path}/languages`}
          label={t('languages')}
          component={NavLink}
          to={`${path}/languages`}
        />
        <Tab
          value={`${path}/cvs`}
          label={t('cvs')}
          component={NavLink}
          to={`${path}/cvs`}
        />
      </Styled.Tabs>
      <Styled.Details>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Styled.Details>
    </>
  )
}

export default memo(EmployeeDetails)
