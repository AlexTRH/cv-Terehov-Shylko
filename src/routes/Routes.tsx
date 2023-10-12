import React, { Suspense } from 'react'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { RoutesPath } from '../constants/routes.constants'
import LogInPage from '../pages/login-page/index'
import SignupPage from '../pages/signup-page/index'
import EmployeesPage from '../pages/employees/index'
import Layout from '../components/templates/layout/layout.template'
import { EmployeeProfile } from '../pages/employee-profile'
import { EmployeeDetails } from '../pages/employee-details'
import { EmployeeCvs } from '../pages/employee-cvs'
import { EmployeeSkills } from '../pages/employee-skills'
import { Languages } from '../pages/languages'
import { CVsPage } from '../pages/cvs'
import { DepartmentsPage } from '../pages/departments'
import { PageLoader } from '../components/atoms/page-loader'
import { Auth } from '../pages/auth/auth'
import { AuthGuard } from '../components/features/auth-guard'
import { EmployeeLanguages } from '../pages/employee-languages'
import Projects from '../pages/projects'
import { Positions } from '../pages/positions'
import Skills from '../pages/skills'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path={RoutesPath.Auth} element={<Auth />}>
            <Route path={RoutesPath.Login} element={<LogInPage />} />
            <Route path={RoutesPath.Signup} element={<SignupPage />} />
          </Route>
          <Route element={<Layout />}>
            <Route path={RoutesPath.Main} element={<AuthGuard />}>
              <Route index element={<EmployeesPage />} />
              <Route
                path={RoutesPath.Employee_details}
                element={<EmployeeDetails />}
              >
                <Route
                  path={RoutesPath.Employee_profile}
                  element={<EmployeeProfile />}
                />
                <Route
                  path={RoutesPath.Employee_skills}
                  element={<EmployeeSkills />}
                />
                <Route
                  path={RoutesPath.Employee_languages}
                  element={<EmployeeLanguages />}
                />
                <Route
                  path={RoutesPath.Employee_cvs}
                  element={<EmployeeCvs />}
                />
                <Route
                  index
                  path={RoutesPath.Other}
                  element={<Navigate to={RoutesPath.Employee_profile} />}
                />
              </Route>
            </Route>
            <Route path={RoutesPath.Projects} element={<AuthGuard />}>
              <Route index element={<Projects />} />
            </Route>
            <Route path={RoutesPath.Cvs} element={<AuthGuard />}>
              <Route index element={<CVsPage />} />
            </Route>
            <Route
              path={RoutesPath.Departments}
              element={<DepartmentsPage />}
            />
            <Route path={RoutesPath.Positions} element={<AuthGuard />}>
              <Route index element={<Positions />} />
            </Route>
            <Route path={RoutesPath.Skills} element={<AuthGuard />}>
              <Route index element={<Skills />} />
            </Route>
            <Route path={RoutesPath.Languages} element={<AuthGuard />}>
              <Route index element={<Languages />} />
            </Route>
          </Route>
          <Route
            path={RoutesPath.Other}
            element={<Navigate to={RoutesPath.Login} />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
