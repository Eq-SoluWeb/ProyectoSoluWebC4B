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
    const [estado, setEstado] = useState(
        JSON.parse(localStorage.getItem("estado")) || null
    );


    useEffect(() => {
        try {
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("rol", JSON.stringify(rol));
            localStorage.setItem("nombreUsuario", JSON.stringify(nombreUsuario));
            localStorage.setItem("estado", JSON.stringify(estado));
        } catch (error) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("rol");
            localStorage.removeItem("nombreUsuario");
            localStorage.removeItem("estado");
        }
    }, [user, token, rol,nombreUsuario,estado]);

    const contextValue = {
        user,
        token,
        rol,
        nombreUsuario,
        estado,
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
        setEstado(est) {
            setEstado(est);
        },
        logout() {
            setToken(null);
            setUser(null);
            setRol(null);
            setEstado(null);
            setNombreUsuario(null);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("rol");
            localStorage.removeItem("nombreUsuario");
            localStorage.removeItem("estado");
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