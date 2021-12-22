import { gql } from '@apollo/client'

const ACTIVAR_ESTADO_PROYECTO = gql`
      
         
        mutation ActivarEstadoProy($id: ID ){
            ActivarEstadoProyecto(
        id:$id
         
        
    ){  
        id
        nombreProyecto
        estadoProyecto
        
    }
}
    `;

export default ACTIVAR_ESTADO_PROYECTO;




