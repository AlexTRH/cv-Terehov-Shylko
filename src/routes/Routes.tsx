import React, { Suspense } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import { authService } from '../graphql/auth/auth.service';
import { RoutesPath } from '../constants/routes.constants';
import LogInPage from '../pages/auth/login-page/index'
import SignupPage from '../pages/auth/signup-page/index'
import EmployeesPage from '../pages/employees/index'


const AppRouter = () => {
   const isAuth = useReactiveVar(authService.access_token$);

  const redirectPath = isAuth ? (
    <Navigate to={RoutesPath.Main} replace />
  ) : (
    <Navigate to={RoutesPath.Login} replace />
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={redirectPath} />
          <Route path={RoutesPath.Login} element={<LogInPage />} />
          <Route path={RoutesPath.Signup} element={<SignupPage />} />
          <Route path={RoutesPath.Main} element={<EmployeesPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
