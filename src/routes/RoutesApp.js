import React from 'react'
import { Routes, Route } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoute';

export const RoutesApp = () => {


    return (
        <Routes>

        <Route exact path="login" element={
            <PublicRoutes>
                <LoginScreen />
            </PublicRoutes>
        } 
        />

        <Route exact path="/*" element={
                <PrivateRoutes>
                    <DashboardRoutes />
                </PrivateRoutes>
                } 
            />            
        </Routes>
    )
}
