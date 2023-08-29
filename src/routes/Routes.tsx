import React, { lazy } from 'react';
import { Routes, Route, Navigate, BrowserRouter, Outlet } from 'react-router-dom';

const LogInPage = lazy(() => import('../pages/auth/LoginPage/LoginPage'));
const SignupPage = lazy(() => import('../pages/auth/SignupPage/SignupPage'));

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LogInPage />}/>
                <Route path='/signup' element={<SignupPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter