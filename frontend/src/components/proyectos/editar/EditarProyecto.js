import { useLazyQuery,useQuery, useMutation } from '@apollo/client';
import {useEffect,useState} from 'react'
import { Container } from 'react-bootstrap';
import { useForm  } from 'react-hook-form';
import { useNavigate, useParams} from 'react-router-dom';
import EDITAR_PROYECTO from '../../../Apollo/gql/editProyecto';
import GET_UN_PROYECTO from '../../../Apollo/gql/getUnProyecto';
import useAuth from '../../../hooks/useAuth';
import AlertaSweet from '../../container/AlertaSweet';


const EditarProyecto = () => {
    let parametros=useParams();
    console.log('Parametros vale=',parametros)
 
 
 
  
        const id=parametros.accion;
    const { register, handleSubmit } = useForm();
    
    const [editProyecto] = useMutation(EDITAR_PROYECTO);
    
 
       



    const handleUpdate = (args) => {
        console.log('Crear Proyecto');
        console.log(args);

       // const { nombreProyecto, fechaInicio, fechaTerminacion, lider, objetivosGenerales, objetivosEspecificos, presupuesto } = args;

        EditarProyecto({ variables: { nombreProyecto:args.nombreProyecto,
             fechaInicio:args.fechaInicio,
              fechaTerminacion:args.fechaTerminacion,
               lider:args.lider,
               objetivosGenerales:args.objetivosGenerales,
                objetivosEspecificos:args.objetivosEspecificos,
                 presupuesto:args.presupuesto } })

    }
    const { loading,data,error } = useQuery(GET_UN_PROYECTO, { variables: { id:  id } });
  
    return (
        <Container>
        <form onSubmit={handleSubmit(handleUpdate)}>
        {data &&
            <div className="form-group">
                <input type="text" className='form-control mb-3' defaultValue={data.nombreProyecto}  {...register("nombreProyecto", { required: true })} />
                <input type="text" className='form-control mb-3' defaultValue={data.fechaInicio} placeholder="Fecha de Inicio" {...register("fechaInicio", { required: true })} />
                <input type="text" className='form-control mb-3' defaultValue={data.fechaTerminacion} placeholder="Fecha de Terminación" {...register("fechaTerminacion", { required: true })} />
                <textarea className='form-control mb-3' defaultValue={data.objetivosGenerales} placeholder="Objetivos Generales" {...register("objetivosGenerales", { required: true })} />
                <textarea   className='form-control mb-3' defaultValue={data.objetivosEspecificos} placeholder="Objetivos Específicos" {...register("objetivosEspecificos", { required: true })} />
                <textarea type="text"   className='form-control mb-3' defaultValue={data.presupuesto} placeholder="Presupuesto" {...register("Presupuesto", { required: true })} />
                <input type="text" className='form-control mb-3' defaultValue={data.lider} placeholder="Lider" {...register("lider", { required: true })} />
               
            </div>
        }
            <input type="submit" />

        </form>
        </Container>
    )
}

export default EditarProyecto


