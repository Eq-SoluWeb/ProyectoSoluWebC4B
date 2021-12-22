import { gql } from '@apollo/client'

const GET_UN_USUARIO = gql`
<<<<<<< HEAD
        query  UnUsuario($id:ID!){            
            unUsuario(id:$id) {
=======
        query  unUsuario($id:ID){            
            UnUsuario(id:$id) 
            {
                id
>>>>>>> Feature_JR
                nombreCompleto
                identificacion
                email            
            }               
        }
    `;

export default GET_UN_USUARIO;