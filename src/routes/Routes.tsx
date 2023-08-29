import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const LogInPage = lazy(() => import('../pages/auth/LoginPage/LoginPage'));
const SignupPage = lazy(() => import('../pages/auth/SignupPage/SignupPage'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
