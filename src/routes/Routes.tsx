import React, { Suspense } from 'react'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { useReactiveVar } from '@apollo/client'
import { authService } from '../graphql/auth/auth.service'
import { RoutesPath } from '../constants/routes.constants'
import LogInPage from '../pages/auth/login-page/index'
import SignupPage from '../pages/auth/signup-page/index'
import EmployeesPage from '../pages/employees/index'
import SkillsPage from '../pages/skills/index'
import Layout from '../components/templates/layout/layout.template'
import { ProfilePage } from '../pages/employee-profile/employee-profile.styles'

const AppRouter = () => {
  const isAuth = useReactiveVar(authService.access_token$)

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={RoutesPath.Initial} element={<Layout />}>
            {isAuth ? (
              <Route
                index
                element={<Navigate to={RoutesPath.Main} replace />}
              />
            ) : (
              <Route
                index
                element={<Navigate to={RoutesPath.Login} replace />}
              />
            )}
            <Route path={RoutesPath.Login} element={<LogInPage />} />
            <Route path={RoutesPath.Signup} element={<SignupPage />} />
            <Route path={RoutesPath.Main} element={<EmployeesPage />} />
            <Route path={RoutesPath.Skills} element={<SkillsPage />} />
            <Route
              path={RoutesPath.Employee_profile}
              element={<ProfilePage />}
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
