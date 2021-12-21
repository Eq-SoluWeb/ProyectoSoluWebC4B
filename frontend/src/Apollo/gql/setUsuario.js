import { gql } from '@apollo/client'

const SET_USUARIO = gql`
        mutation setUsuario($nombreCompleto: String, $identificacion: String, $email: String, $password: String, $rol: String) {            
            AgregarUsuario(usuario : {
                nombreCompleto: $nombreCompleto,
                identificacion: $identificacion,
                email: $email,
            }) {
                id
                nombreCompleto
                identificacion
                email
                estado
                rol
            }               
        }
    `;

export default SET_USUARIO;