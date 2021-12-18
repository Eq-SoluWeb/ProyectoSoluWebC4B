import { gql } from '@apollo/client'

const GET_UN_USUARIO = gql`
        query  UnUsuario($id:ID!){            
            unUsuario(id:$id) {
                nombreCompleto
                identificacion
                email            
            }               
        }
    `;

export default GET_UN_USUARIO;