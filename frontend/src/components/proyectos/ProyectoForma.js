import React from 'react'


    import { useQuery } from '@apollo/client';
   
    import { NavLink, useParams } from 'react-router-dom'
  
    
   
    import GET_PROYECTOS from '../../Apollo/gql/getProyectos';
    import Proyecto from './Proyecto';
    
    const ProyectoFormas = () => {
    
        const { loading, data, error } = useQuery(GET_PROYECTOS);
    
        const handleDelete = (id) => {
            console.log('List');
        }
       
    
        return (
            <>
                {loading && <p>Cargando ...</p>}
                {error && <p>Se ha producido un error</p>}
                {data &&
                            
                     data.Proyectos.map(elproyecto => <Proyecto proyecto={elproyecto} key={elproyecto.id}/>)
                            
                   
                }
    
            </>
        )
    }

export default ProyectoFormas


