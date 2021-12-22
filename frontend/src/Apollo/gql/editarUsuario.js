import { gql } from '@apollo/client'


 


const EDITAR_USUARIO = gql`
        mutation datosUsuario($id:ID,$nombreCompleto:String,$identificacion:String,$email:String)
        
        {
            ActualizarDatosUsuario(id:$id,
                input:{
                    nombreCompleto: $nombreCompleto,
                    identificacion: $identificacion,
                    email: $email
                }) 
         
            {
                id
                nombreCompleto
                identificacion
                email
            }               
        }

    `;

export default EDITAR_USUARIO;
