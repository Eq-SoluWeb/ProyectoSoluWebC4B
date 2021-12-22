import { gql } from '@apollo/client'

const GET_UN_PROYECTO = gql`
        query UnProyecto($id:ID){            
            UnProyecto(id:$id) {
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

export default GET_UN_PROYECTO;

 