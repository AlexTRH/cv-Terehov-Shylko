import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import { authService } from '../graphql/auth/auth.service';

const LogInPage = lazy(() => import('../pages/auth/LoginPage/LoginPage'))
const SignupPage = lazy(() => import('../pages/auth/SignupPage/SignupPage'))
const EmployeesPage = lazy(() => import('../pages/employees/EmployeesPage'))

const AppRouter = () => {
   const isAuth = useReactiveVar(authService.access_token$);

  const redirectPath = isAuth ? (
    <Navigate to={'/main'} replace />
  ) : (
    <Navigate to={'/login'} replace />
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={redirectPath} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/main" element={<EmployeesPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
