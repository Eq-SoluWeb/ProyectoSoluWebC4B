import { gql } from '@apollo/client'

const GET_PROYECTOS = gql`
        query {            
            Proyectos {
                id
                nombreProyecto
                lider{nombreCompleto}
                fechaInicio
                fechaTerminacion
                estadoProyecto
                faseProyecto
            }               
        }
    `;

export default GET_PROYECTOS;