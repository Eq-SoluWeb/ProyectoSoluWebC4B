import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Icons } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {

    const auth = useAuth();
    console.log('auth navbar',auth)
     
    if (auth.isLogged()) {
        let perfil = auth.user.rol;
    }


    const navigate = useNavigate();

    const handleLogout = () => {

        auth.logout();

        navigate('/', {
            replace: true
        })

    }

<<<<<<< HEAD
=======


>>>>>>> Feature_JR
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark   ">

<<<<<<< HEAD
            <h1
                className="navbar-brand"
            >
                Gestor de Proyectos
            </h1>

            <div className="navbar-collapse">
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/usuarios"
                >
                    Usuarios
                </NavLink>
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/proyectos"
                >
                    Proyectos
                </NavLink>
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/proyectos"
                >
                    Inscripciones
                </NavLink>
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/proyectos"
                >
                    Avances
                </NavLink>
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/admin"
                >
                    Admin
                </NavLink>
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/lider"
                >
                    Lider
                </NavLink>
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/estudiante"
                >
                    Estudiante
                </NavLink>
            </div>
=======
            <h1 className="navbar-brand">
                Gestor de Proyectos
            </h1>

            { auth.isLogged() &&
                auth.user?.rol === "Administrador" &&
                
                <div className="navbar-collapse">
                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/usuarios">
                        Usuarios
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/proyectos">
                        Proyectos
                    </NavLink>
                </div>
            }
            {    auth.isLogged &&
                
                auth.user?.rol === "Lider" &&
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/misproyectos">
                    Mis Proyectos
                </NavLink>
            }

            {    auth.isLogged &&
                
                auth.user?.rol === "Estudiante" &&
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/proyectos">
                    Proyectos
                </NavLink>
            }
>>>>>>> Feature_JR

            <div className="navbar-collapse">
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/registro"
                >
                    Registro
                </NavLink>
<<<<<<< HEAD
=======
                {!auth.isLogged() &&
>>>>>>> Feature_JR
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/login"
                >
                    Login
                </NavLink>
<<<<<<< HEAD
            </div>

            {
                auth.isLogged() &&

                <div className="navbar-collapse collapse w-40 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">

                        <NavLink className="btn btn-primary mr" to={`/usuarios/${auth.user.usuario}`}>
                            Mis Datos
                        </NavLink>

=======
                }
            </div>
           { auth.user?.nombreUsuario &&
            <h1 className="navbar-brand">
            auth.user?nombreUsuario
            </h1>
           }
            {
                auth.isLogged &&
                
                <div className="navbar-collapse collapse w-40 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">

                        <NavLink className="btn btn-primary mr" to={`/usuarios/${auth.user?.usuario}`}>
                            Mis Datos
                        </NavLink>
>>>>>>> Feature_JR
                        <button
                            className="nav-item nav-link btn"
                            onClick={handleLogout}
                        >
<<<<<<< HEAD
                            Logout
=======
                        <i className="bi bi-box-arrow-right">Salir</i>  
>>>>>>> Feature_JR
                        </button>

                    </ul>
                </div>
            }
        </nav>
    )
}

export default Navbar