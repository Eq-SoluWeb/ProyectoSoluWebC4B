import { gql } from '@apollo/client'

const APROBAR_ESTADO_USUARIO = gql`
      
         
        mutation ActivarEstadoUsr($id: ID ){
            ActivarEstadoUsuario(
        id:$id
         
        
    ){  
        id
        nombreCompleto
        estado
        
    }
}
    `;

export default APROBAR_ESTADO_USUARIO;
