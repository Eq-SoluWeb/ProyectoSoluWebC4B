import React, { useState } from 'react'


import { useMutation, useQuery } from '@apollo/client';

import { NavLink, useNavigate, useParams } from 'react-router-dom'
import GET_PROYECTOS from '../../../Apollo/gql/getProyectos';

import '../proyectos.css';

import useAuth from '../../../hooks/useAuth';
import ACTIVAR_ESTADO_PROYECTO from '../../../Apollo/gql/ActivarEstadoProyecto';
import INACTIVAR_ESTADO_PROYECTO from '../../../Apollo/gql/InactivarEstadoProyecto';
import INICIAR_FASE_PROYECTO from '../../../Apollo/gql/IniciarFaseProyecto';
import DESINICIAR_FASE_PROYECTO from '../../../Apollo/gql/DesIniciarFaseProyecto';
import SET_SOLICITUD from '../../../Apollo/gql/SetSolicitud';

const ListarProyectos = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    if (!auth.isLogged) {
        navigate('/', {
            replace: true
        })
    }
    const moment = require('moment');


    const { loading, data, error } = useQuery(GET_PROYECTOS);
    const [nuevoEstado, setEstado] = useState("INACTIVO");

    const [activarEstadoProy] = useMutation(ACTIVAR_ESTADO_PROYECTO,{
        refetchQueries:[{
            query: GET_PROYECTOS
        }]
    });
    const [inactivarProyecto] = useMutation(INACTIVAR_ESTADO_PROYECTO,{
        refetchQueries:[{
            query: GET_PROYECTOS
        }]
    });
     
    const [iniciarFaseProy] = useMutation(INICIAR_FASE_PROYECTO,{
        refetchQueries:[{
            query: GET_PROYECTOS
        }]
    });
    const [desIniciarFaseProy] = useMutation(DESINICIAR_FASE_PROYECTO,{
        refetchQueries:[{
            query: GET_PROYECTOS
        }]
    });

    const [setSolicitud ] = useMutation(SET_SOLICITUD, {
        refetchQueries: [{
            query: GET_PROYECTOS
        }]
    });

     
        const handleCreateSolicitud = ({id}) => {
        setSolicitud({ variables: { proyecto:id, usuario:auth.user?.usuario } });
        }

        const handleActivarProyecto = ({ id }) => {
            activarEstadoProy({ variables: { id: id } });
            iniciarFaseProy({ variables: { id: id } });


        }
        const handleInactivarProyecto = ({ id }) => {
            inactivarProyecto({ variables: { id: id } });
            desIniciarFaseProy({ variables: { id: id } });
          


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
                                        <td className="data-date-format='DD MM YYYY'">{proyecto.fechaInicio}</td>
                                        <td>{proyecto.fechaTerminacion}</td>
                                        <td>{proyecto.estadoProyecto} </td>
                                        <td>{proyecto.faseProyecto} </td>
                                        { 
                                            <td>
                                               {auth.user?.rol==="Lider" &&
                                                <NavLink className="btn btn-primary mr-2 btn-sm" to={`/proyectos/${proyecto.id}`}>
                                                    Editar
                                                </NavLink>
                                        }
                                                {proyecto.estadoProyecto === 'INACTIVO' &&
                                                auth.user?.rol==="Lider"&&
                                                    <button type="button" className="btn btn btn-warning mr-3 btn-sm" data="data de pruebas"
                                                        onClick={() => handleActivarProyecto(proyecto)}>Activar</button>

                                                }
                                                {proyecto.estadoProyecto === 'ACTIVO' &&
                                                    auth.user?.rol==="Estudiante" &&
                                                    <button type="button" className="btn btn btn-secondary mr-3 btn-sm" data="data de pruebas"
                                                        onClick={() => handleCreateSolicitud(proyecto)}>Solicitar</button>
                                                    

                                                }
                                                {proyecto.estadoProyecto === 'ACTIVO' &&
                                                 auth.user?.rol==="Lider"&&
                                                    <button type="button" className="btn btn btn-danger mr-3 btn-sm" data="data de pruebas"
                                                        onClick={() => handleInactivarProyecto(proyecto)}>Inactivar</button>

                                                }

                                            </td>
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }


            </>
        )
    
}
 

export default ListarProyectos

