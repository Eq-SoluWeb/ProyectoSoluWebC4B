import React, { useState } from 'react'


import { useMutation, useQuery } from '@apollo/client';

import { NavLink, useNavigate, useParams } from 'react-router-dom'
import GET_MIS_PROYECTOS from '../../../Apollo/gql/getMisProyectos';

import '../proyectos.css';
import ACTIVAR_ESTADO_PROYECTO from '../../../Apollo/gql/ActivarEstadoProyecto';
import INACTIVAR_ESTADO_PROYECTO from '../../../Apollo/gql/InactivarEstadoProyecto';
import useAuth from '../../../hooks/useAuth';

const ListarProyectos = () => {
    const auth = useAuth();
    const id = auth.user.usuario;
    const navigate = useNavigate();
    if (!auth.isLogged) {
        navigate('/', {
            replace: true
        });
    }
    if (auth.user?.rol==='No') {
        navigate('/', {
            replace: true
        });
    }

    const { loading, data, error } = useQuery(GET_MIS_PROYECTOS, { variables: { idUsuario: id } });


    const [nuevoEstado, setEstado] = useState("INACTIVO");

    const [updateEstadoProyecto] = useMutation(ACTIVAR_ESTADO_PROYECTO);
    const [inactivarProyecto] = useMutation(INACTIVAR_ESTADO_PROYECTO);
    const handleEstadoProyecto = ({ id }) => {



        updateEstadoProyecto({
            variables: {
                id: id

            }
        });

        const handleInactivarProyecto = ({ id }) => {
            inactivarProyecto({
                variables: {
                    id: id

                }
            });

        }

        return (
            <>
                {loading && <p>Cargando ...</p>}
                {error && <p>Se ha producido un error</p>}
                {
                    data &&
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre Proyecto</th>
                                <th scope="col">Lider</th>
                                <th scope="col">Fecha Inicio</th>
                                <th scope="col">Fecha Terminación</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Fase</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.Proyectos.map((proyecto, index) => (
                                    <tr key={proyecto.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{proyecto.nombreProyecto} </td>
                                        <td>{proyecto.lider.nombreCompleto} </td>
                                        <td>{proyecto.fechaInicio}</td>
                                        <td>{proyecto.fechaTerminacion}</td>
                                        <td>{proyecto.estadoProyecto} </td>
                                        <td>{proyecto.faseProyecto} </td>
                                        <td>
                                            <NavLink className="btn btn-primary mr" to={`/proyectos/${proyecto.id}`}>
                                                Editar
                                            </NavLink>
                                            {proyecto.estadoProyecto === 'INACTIVO' &&
                                                <button type="button" className="btn btn btn-warning mr-3" data="data de pruebas"
                                                    onClick={() => handleEstadoProyecto(proyecto)}>Activar</button>

                                            }
                                            {proyecto.estadoProyecto === 'ACTIVO' &&
                                                <button type="button" className="btn btn btn-danger mr-3" data="data de pruebas"
                                                    onClick={() => handleInactivarProyecto(proyecto)}>Inactivar</button>

                                            }

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }

            </>
        )
    }
}

export default ListarProyectos

