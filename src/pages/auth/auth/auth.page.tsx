import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Tabs, Tab, AppBar } from '@mui/material'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { PageLoader } from '../../../components/atoms/page-loader'

const Auth = () => {
  const location = useLocation()
  const { t } = useTranslation()

  return (
    <>
      <AppBar>
        <Tabs value={location.pathname} centered>
          <Tab
            value="/auth/login"
            label={t('Login')}
            component={NavLink}
            to="login"
          />
          <Tab
            value="/auth/signup"
            label={t('Signup')}
            component={NavLink}
            to="signup"
          />
        </Tabs>
      </AppBar>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Auth
