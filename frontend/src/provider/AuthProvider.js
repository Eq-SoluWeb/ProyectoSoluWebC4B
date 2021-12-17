import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [token, setToken] = useState(
        JSON.parse(localStorage.getItem("token")) || null
    );

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [rol, setRol] = useState(
        JSON.parse(localStorage.getItem("rol")) || null
    );

    useEffect(() => {
        try {
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("rol", JSON.stringify(rol));
        } catch (error) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("rol");
        }
    }, [user, token, rol]);

    const contextValue = {
        user,
        token,
        rol,
        setToken(token) {
            setToken(token);
        },
        setUser(us) {
            setUser(us);
        },
        setRol(rl) {
            setRol(rl);
        },
        logout() {
            setToken(null);
            setUser(null);
            setRol(null);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("rol");
        },
        isLogged() {
            return !!user;
        }
    }

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;