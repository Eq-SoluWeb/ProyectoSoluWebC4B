import { gql } from '@apollo/client'

const GET_UN_USUARIO = gql`
        query  unUsuario($id:ID){            
            UnUsuario(id:$id) 
            {
                id
                nombreCompleto
                identificacion
                email
            
            }               
        }
    `;

export default GET_UN_USUARIO;