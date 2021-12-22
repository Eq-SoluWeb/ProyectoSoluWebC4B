import { useMutation, useQuery,useLazyQuery } from '@apollo/client';
import {useEffect,useState} from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate, useParams } from 'react-router-dom'

import EDITAR_USUARIO from '../../../Apollo/gql/editarUsuario';
 
import GET_UN_USUARIO from '../../../Apollo/gql/getUnUsuario';
import useAuth from '../../../hooks/useAuth';
 


const EditarUsuario= ( ) => {
    let parametros=useParams();
 
    const auth=useAuth();
    const navigate = useNavigate();
  
       const id=parametros.action;
 

    // la destructuracion funciona de derecha a izquierda
    const { loading,data,error } = useQuery(GET_UN_USUARIO, { variables: { id:  id } });
  
    console.log('data es:',data);
    
    
    const [updateUsuario] = useMutation(EDITAR_USUARIO);
   
    const { register, handleSubmit } = useForm();
 
    const handleUpdate = async (args) => {
        const {  nombreCompleto, identificacion, email  } = args;
         await updateUsuario({ variables: {  id:id,input:{
            nombreCompleto:nombreCompleto,
            identificacion:identificacion,
            email:email} }});
            

    }
    console.log('updateUsuario',updateUsuario)
   // const[nombreCompleto]=useState(nombreCompleto);
    useEffect(() => {
        if (updateUsuario.executeOptions) {
           console.log('updateUsuario',updateUsuario)
            navigate('/usuarios', {
                replace: true
            })
        }
    }, )
    return (

        <>
            {/* {data && <h1>datos</h1>} */}
            {error && <h1>error</h1>}
            {loading && <h1>datos</h1>}
            {data && <form onSubmit={handleSubmit(handleUpdate)}>
                <div className="form-group">
                    <input type="text" className='form-control mb-3' defaultValue={data.unUsuario.nombreCompleto}    placeholder="Nombre" {...register("nombreCompleto", { required: true })} />
                    <input type="text" className='form-control mb-3' defaultValue={data.unUsuario.identificacion} placeholder="Identificacion" {...register("identificacion", { required: true })} />
                    <input type="text" className='form-control mb-3' defaultValue={data.unUsuario.email} placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    
                </div>
                <input className='btn btn-success' type="submit" />

            </form>}
        </>

    )
}

export default EditarUsuario