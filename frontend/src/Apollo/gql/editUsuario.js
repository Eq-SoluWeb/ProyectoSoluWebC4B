import { gql } from '@apollo/client'

const EDIT_USUARIO = gql`
  mutation editarUsuario($id: ID!, $nombreCompleto: String!, $identificacion: String!, $email: String!) {
      ActualizarDatosUsuario(id: $id, input:{
        nombreCompleto: $nombreCompleto
        identificacion: $identificacion
        email: $email    
      })
      {
        id
        nombreCompleto
        identificacion
        email
    }
    }
`
export default EDIT_USUARIO;