import React, { Suspense } from 'react'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { useReactiveVar } from '@apollo/client'
import { authService } from '../graphql/auth/auth.service'
import { RoutesPath } from '../constants/routes.constants'
import LogInPage from '../pages/auth/login-page/index'
import SignupPage from '../pages/auth/signup-page/index'
import EmployeesPage from '../pages/employees/index'
import Layout from '../components/templates/layout/layout.template'
import { EmployeeProfile } from '../pages/employee-profile'
import { EmployeeDetails } from '../pages/employee-details'
import { EmployeeCvs } from '../pages/employee-cvs'

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
            <Route
              path={RoutesPath.Employee_profile}
              element={<EmployeeProfile />}
            />
            <Route path=":id" element={<EmployeeDetails />} />
            <Route path={RoutesPath.Cvs} element={<EmployeeCvs />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
