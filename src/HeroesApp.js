import React, { useEffect, useReducer } from 'react'
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { RoutesApp } from './routes/RoutesApp'

const init = ( ) => {

    return JSON.parse(localStorage.getItem('user')) || {logged: false };
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)

    useEffect(() => {
        if (!user) return;
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    return (
        <BrowserRouter>
            <AuthContext.Provider value={{
                user,
                dispatch
            }}>
                <RoutesApp />
            </AuthContext.Provider>
        </BrowserRouter>
    )
}