import React, { useEffect } from 'react';
 
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
 
import Input from '../../Input';
import DropDown from '../../DropDown';
 
import { toast } from 'react-toastify';

 
import GET_UN_USUARIO from '../../../Apollo/gql/getUnUsuario';
import EDITAR_USUARIO from '../../../Apollo/gql/editarUsuario';
import ButtonLoading from '../../ButtonLoading';
import useFormData from '../../../hooks/useFormData';
import { Enum_EstadoUsuario, Enum_Rol } from '../../../utils/enums';

const EditarUsuario = ({userid}) => {
  
  const { form, formData, updateFormData } = useFormData(null);
 // const { id } = useParams();
 const id=userid;
 console.log('Userid',userid);
  const {
    loading: loadingQuery,
    error: errorQuery,
    data: dataQuery,
  } = useQuery(GET_UN_USUARIO, {
    variables: { id },
  });
  console.log('dataQuery',dataQuery)
  const [editUser, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
    useMutation(EDITAR_USUARIO);

  const submitForm = async (e) => {
    e.preventDefault();
    delete formData.rol;
    await editUser({
      variables: { id, ...formData },
    });
  };

  useEffect(() => {
    if (dataMutation) {
      toast.success('Usuario modificado con exito');
    }
    
  }, [dataMutation]);

  useEffect(() => {
    if (errorMutation) {
      toast.error( 'Error modificando el usuario' );
    }
    if (errorQuery)  {
      toast.error('Error modificando el usuario');
    }
  }, [errorMutation, errorQuery]);

  if (loadingQuery) return <div>Loading</div>;

  return (
    <div className='flew flex-col w-full h-full items-center justify-center p-10'>
      <Link to='/usuarios'>
        <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
      </Link>
      <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar Usuario</h1>
      <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className='flex flex-col items-center justify-center'
      >
        <Input
          label='Nombre de la persona:'
          type='text'
          name='nombreCompleto'
          defaultValue={dataQuery.UnUsuario.user.nombreCompleto}
          required={true}
        />
       
        <Input
          label='Correo de la persona:'
          type='email'
          name='email'
          defaultValue={dataQuery.unUsuario.email}
          required={true}
        />
        <Input
          label='Identificación de la persona:'
          type='text'
          name='identificacion'
          defaultValue={dataQuery.unUsuario.identificacion}
          required={true}
        />
        <DropDown
          label='Estado de la persona:'
          name='estado'
          defaultValue={dataQuery.unUsuario.estado}
          required={true}
          options={Enum_EstadoUsuario}
        />
        <span>Rol de la persona: <br/> {Enum_Rol[dataQuery.Usuario.rol]}</span>
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={loadingMutation}
          text='Confirmar'
        />
      </form>
    </div>
  );
};

export default EditarUsuario;
