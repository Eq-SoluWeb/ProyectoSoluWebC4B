import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import CrearProyecto from './crear/CrearProyecto';
import EditarProyecto from './editar/EditarProyecto';
import ListarProyectos from './listar/ListarProyectos';

import './proyectos.css';

const MisProyectosPage = () => {
    const auth = useAuth();
    console.log('auth=', auth);
    const navigate = useNavigate();
    if (!auth.isLogged()) {
        navigate('/', {
            replace: true
        })
    }
    const { action } = useParams();



    return (
        <section className="content mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-primary card-outline">
                            <div className="card-header flex">
                                <h5 className="m-0">Mis Proyectos</h5>
                                {
                                    auth.user?.rol === "Lider" &&
                                    <NavLink className="btn btn-primary mr-3" to={`/Proyectos/crear`}>
                                        Crear Proyecto
                                    </NavLink>
                                }

                                <div className="card-body">
                                    {action === '' || action === undefined ? <ListarProyectos /> : (action === 'crear') ? <CrearProyecto /> : <EditarProyecto />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MisProyectosPage
