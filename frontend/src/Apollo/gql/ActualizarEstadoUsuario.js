import { gql } from '@apollo/client'

const ACTUALIZAR_ESTADO_USUARIO = gql`
        mutation ActualizarEstadoUsr($id : ID,$estado:String)
         
       {
          ActualizarEstadoUsuario(id:$id,
            input:{estado:$estado}){
                id
                nombreCompleto
                estado
            }
            }
      
    `;

export default ACTUALIZAR_ESTADO_USUARIO;

