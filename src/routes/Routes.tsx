import React, { lazy, Suspense } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

const LogInPage = lazy(() => import('../pages/auth/LoginPage/LoginPage'))
const SignupPage = lazy(() => import('../pages/auth/SignupPage/SignupPage'))
const EmployeesPage = lazy(() => import('../pages/employees/EmployeesPage'))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/main" element={<EmployeesPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
