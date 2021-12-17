import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import './usuarios.css';
import CrearUsuario from './crear/CrearUsuario';
import EditarUsuario from './editar/EditarUsuario';
import ListarUsuarios from './listar/ListarUsuarios';

const UsuariosPage = () => {

    const { action } = useParams();

    console.log(action);

    return (
        <section className="content mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-primary card-outline">
                            <div className="card-header flex">
                                <h5 className="m-0">Usuarios</h5>
                                {
                                    action !== undefined ?

                                        <NavLink className="btn btn-danger mr-0" to={`/usuarios`}>
                                            Cancelar
                                        </NavLink>
                                        :                
                                        <NavLink className="btn btn-primary mr-0" to={`/usuarios/crear`}>
                                            Crear Usuario
                                        </NavLink>
                                }
                            </div>
                            <div className="card-body">
                                {action === '' || action === undefined ? <ListarUsuarios /> : (action === 'crear') ? <CrearUsuario /> : <EditarUsuario />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UsuariosPage
