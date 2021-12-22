import { gql } from '@apollo/client'

const DESAPROBAR_ESTADO_USUARIO = gql`
      
         
        mutation DesaprobarEstadoUsr($id: ID ){
            DesaprobarEstadoUsuario(
        id:$id
         
        
    ){  
        id
        nombreCompleto
        estado
        
    }
}
    `;

export default DESAPROBAR_ESTADO_USUARIO;
