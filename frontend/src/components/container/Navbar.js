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



    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark   ">

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

            <div className="navbar-collapse">
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/registro"
                >
                    Registro
                </NavLink>
                {!auth.isLogged() &&
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/login"
                >
                    Login
                </NavLink>
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
                        <button
                            className="nav-item nav-link btn"
                            onClick={handleLogout}
                        >
                        <i className="bi bi-box-arrow-right">Salir</i>  
                        </button>

                    </ul>
                </div>
            }
        </nav>
    )
}

export default Navbar