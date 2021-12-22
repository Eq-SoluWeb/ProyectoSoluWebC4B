import { useQuery,useMutation } from '@apollo/client';
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import ACTUALIZAR_ESTADO_USUARIO from '../../../Apollo/gql/ActualizarEstadoUsuario';

import GET_USUARIOS from '../../../Apollo/gql/getUsuarios';

import useAuth from '../../../hooks/useAuth';
 

import '../usuarios.css';

const ListarUsuarios = () => {
    const [nuevoEstado,setEstado]=useState("AUTORIZADO");
    const auth=useAuth();
         const {rol,usuario}=auth;
    const { loading, data, error } = useQuery(GET_USUARIOS);
    
    
        const [updateEstadoUsuario] = useMutation(ACTUALIZAR_ESTADO_USUARIO);
        const handleAprobar =async ({id}) => {
         
        console.log('args vale=',id);
         setEstado('AUTORIZADO') ;
         await updateEstadoUsuario({ variables: {  id:id,input:{
            estado:nuevoEstado,
             } }});
            

    }
    return (
        <>
            {loading && <p>Cargando ...</p>}
            {error && <p>Se ha producido un error</p>}
            {data &&
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre Completo</th>
                            <th scope="col">Identificación</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.Usuarios.map((usuario, index) => (
                                <tr key={usuario.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{usuario.nombreCompleto} </td>
                                    <td>{usuario.identificacion} </td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.rol} </td>
                                    <td>{usuario.estado} </td>
                                   
                                    <td>
                                       
                                      
                                        <NavLink className="btn btn-primary mr" to={`/usuarios/${usuario.id}`}>
                                            Editar
                                        </NavLink>
                                        {usuario.estado!=="AUTORIZADO" &&
                                            <button type="button" className="btn btn btn-success mr-3"  
                                                     onClick={() => handleAprobar(usuario)}>Autorizar</button>
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

export default ListarUsuarios
