import React from 'react'


    import { useQuery } from '@apollo/client';
   
    import { NavLink, useParams } from 'react-router-dom'
    import GET_PROYECTOS from '../../../Apollo/gql/getProyectos';
    
    import '../proyectos.css';
    
    const ListarProyectos = () => {
    
        const { loading, data, error } = useQuery(GET_PROYECTOS);
    
        const handleDelete = (id) => {
            console.log('List');
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
                                        <td>{proyecto.lider} </td>
                                        <td>{proyecto.fechaInicio}</td>
                                        <td>{proyecto.fechaTerminacion}</td>                                        
                                        <td>{proyecto.estadoProyecto} </td>
                                        <td>{proyecto.faseProyecto} </td>
                                        <td>
                                            <NavLink className="btn btn-primary mr" to={`/proyectos/${proyecto.id}`}>
                                                Editar
                                            </NavLink>
                                            <button type="button" className="btn btn btn-danger mr-3" data="data de pruebas" onClick={() => handleDelete(proyecto.id)}>Eliminar</button>
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

export default ListarProyectos

