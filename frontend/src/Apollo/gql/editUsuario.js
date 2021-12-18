import { gql } from '@apollo/client'

const EDITAR_USUARIO = gql`
        mutation {
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
                estado
                rol
            }               
        }

    `;

export default EDITAR_USUARIO;

