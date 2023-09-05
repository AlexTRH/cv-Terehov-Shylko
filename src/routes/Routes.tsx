import React, { Suspense } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import { authService } from '../graphql/auth/auth.service';
import { RoutesPath } from '../constants/routes.constants';
import LogInPage from '../pages/auth/loginPage/index'
import SignupPage from '../pages/auth/signupPage/index'
import EmployeesPage from '../pages/employees/index'


const AppRouter = () => {
   const isAuth = useReactiveVar(authService.access_token$);

  const redirectPath = isAuth ? (
    <Navigate to={RoutesPath.main} replace />
  ) : (
    <Navigate to={RoutesPath.login} replace />
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={redirectPath} />
          <Route path={RoutesPath.login} element={<LogInPage />} />
          <Route path={RoutesPath.signup} element={<SignupPage />} />
          <Route path={RoutesPath.main} element={<EmployeesPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
