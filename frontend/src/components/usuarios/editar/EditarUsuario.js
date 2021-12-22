import { useMutation, useQuery,useLazyQuery } from '@apollo/client';
import {useEffect,useState} from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
 
 
import EDITAR_USUARIO from '../../../Apollo/gql/editarUsuario';
 
import GET_UN_USUARIO from '../../../Apollo/gql/getUnUsuario';
import useAuth from '../../../hooks/useAuth';
 
import AlertaSweet from '../../container/AlertaSweet';
import { Container } from 'react-bootstrap';
 


const EditarUsuario= ( ) => {
    let parametros=useParams();
 
    const auth=useAuth();
    const navigate = useNavigate();
  
       const id=parametros.action;
     if(!auth?.Logged)
     navigate('/', {
        replace: true
    })

    // la destructuracion funciona de derecha a izquierda
    const { loading,data,error } = useQuery(GET_UN_USUARIO, { variables: { id:  id } });
  
    console.log('data es:',data);
    
    
    const [updateUsuario] = useMutation(EDITAR_USUARIO, {
        refetchQueries: [{
            query: GET_UN_USUARIO
        }]
    });
   
    const { register, handleSubmit } = useForm();
 
    const handleUpdate = async (args) => {
        const {  nombreCompleto, identificacion, email  } = args;
         await updateUsuario({ variables: {  id:id,input:{
            nombreCompleto:nombreCompleto,
            identificacion:identificacion,
            email:email} }});
            <AlertaSweet />
           
         

    }
    console.log('updateUsuario',updateUsuario)
   // const[nombreCompleto]=useState(nombreCompleto);
   


   
    return (

        <Container>
            {/* {data && <h1>datos</h1>} */}
            {error && <h1>error</h1>}
            {loading && <h1>datos</h1>}
            {data && <form onSubmit={handleSubmit(handleUpdate)}>
                <div className="form-group">
                    <input type="text" className='form-control mb-3' defaultValue={data.UnUsuario.nombreCompleto}    placeholder="Nombre" {...register("nombreCompleto", { required: true })} />
                    <input type="text" className='form-control mb-3' defaultValue={data.UnUsuario.identificacion} placeholder="Identificacion" {...register("identificacion", { required: true })} />
                    <input type="text" className='form-control mb-3' defaultValue={data.UnUsuario.email} placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    
                </div>
                <input className='btn btn-success' type="submit" />

            </form>}
        </Container>

    )
}

export default EditarUsuario