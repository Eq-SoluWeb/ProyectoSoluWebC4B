import React from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import GET_UN_USUARIO from '../../../Apollo/gql/getUnUsuario';
import useAuth from '../../../hooks/useAuth';
import EDIT_USUARIO from '../../../Apollo/gql/editUsuario';

const EditarUsuario = ({ userid }) => {

    const auth =useAuth()
    const user = localStorage.getItem("user")

    const {id} = useParams();
    const navigate = useNavigate();
    const { loading, data, error } = useQuery(GET_UN_USUARIO, { variables: { id: userid } });

    const [updateUsuario] = useMutation(EDIT_USUARIO);
    const { register, handleSubmit } = useForm();
    
    const handleUpdate = (args) => {
        
        const { id, nombreCompleto, identificacion, email} = args;
        updateUsuario({ variables: {  id:auth.user.id, nombreCompleto, identificacion, email} });
        
        navigate('/usuarios');
    }

    return (

        <>
            {error && <h1>error</h1>}
            {loading && <h1>datos</h1>}
            {data && <form onSubmit={handleSubmit(handleUpdate)}>
                <div className="form-group">
                    <input type="text" className='form-control mb-3' defaultValue={data.unUsuario.nombreCompleto} placeholder="Nombre Completo" {...register("nombreCompleto", { required: true })} />
                    <input type="text" className='form-control mb-3' defaultValue={data.unUsuario.identificacion} placeholder="Identificación" {...register("identificacion", { required: true })} />
                    <input type="text" className='form-control mb-3' defaultValue={data.unUsuario.email} placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    
                </div>
                <input className='btn btn-success' type="submit" />

            </form>}
        </>

    )
}

export default EditarUsuario