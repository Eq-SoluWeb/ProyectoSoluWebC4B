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
    const [nombreUsuario, setNombreUsuario] = useState(
        JSON.parse(localStorage.getItem("nombreUsuario")) || null
    );


    useEffect(() => {
        try {
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("rol", JSON.stringify(rol));
            localStorage.setItem("nombreUsuario", JSON.stringify(nombreUsuario));
        } catch (error) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("rol");
            localStorage.removeItem("nombreUsuario");
        }
    }, [user, token, rol,nombreUsuario]);

    const contextValue = {
        user,
        token,
        rol,
        nombreUsuario,
        setToken(token) {
            setToken(token);
        },
        setUser(usr) {
            setUser(usr);
        },
        setRol(rl) {
            setRol(rl);
        },
        setNombreUsuario(nom) {
            setNombreUsuario(nom);
        },
        logout() {
            setToken(null);
            setUser(null);
            setRol(null);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("rol");
            localStorage.removeItem("nombreUsuario");
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