import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import CrearProyecto from './crear/CrearProyecto';
import EditarProyecto from './editar/EditarProyecto';
import ListarProyectos from './listar/ListarProyectos';

import './proyectos.css';

const ProyectosPage = () => {

    const { action } = useParams();

    console.log(action);

    return (
        <section className="content mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-primary card-outline">
                            <div className="card-header flex">
                                <h5 className="m-0">Proyectos</h5>
                                {
                                    action !== undefined ?

                                        <NavLink className="btn btn-danger mr-3" to={`/Proyectos`}>
                                            Cancelar
                                        </NavLink>
                                        :
                                        <NavLink className="btn btn-primary mr-3" to={`/Proyectos/crear`}>
                                            Crear Proyecto
                                        </NavLink>

                                }
                            </div>
                            <div className="card-body">
                                {action === '' || action === undefined ? <ListarProyectos /> : (action === 'crear') ? <CrearProyecto /> : <EditarProyecto />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProyectosPage
