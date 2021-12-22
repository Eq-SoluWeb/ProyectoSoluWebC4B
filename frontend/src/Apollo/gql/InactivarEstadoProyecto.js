import { gql } from '@apollo/client'

const INACTIVAR_ESTADO_PROYECTO = gql`
      
         
        mutation InactivarEstadoProy($id: ID ){
            InactivarEstadoProyecto(
        id:$id
         
        
    ){  
        id
        nombreProyecto
        estadoProyecto
        
    }
}
    `;

export default INACTIVAR_ESTADO_PROYECTO;