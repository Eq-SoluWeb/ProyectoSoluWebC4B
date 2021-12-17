import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const perfil = "inicio";

    const navigate = useNavigate();

    const handleLogout = () => {

        navigate('/', {
            replace: true
        })

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Gestor de Proyectos
            </Link>

            {
                perfil === 'estudiante' && <div className="navbar-collapse">
                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/usuarios"
                    >
                        Usuarios
                    </NavLink>
                </div>
            }

            {
                perfil === 'lider' && <div className="navbar-collapse">
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
                </div>
            }

            {
                perfil === "inicio" && <div className="navbar-collapse">
                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/registro"
                    >
                        Registro
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/login"
                    >
                        Login
                    </NavLink>
                </div>
            }
            
            <div className="navbar-collapse collapse w-40 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                        SoluWeb
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar
