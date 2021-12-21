import { gql } from '@apollo/client'

export const EDIT_USUARIO = gql`
  mutation editarUsuario($nombreCompleto: String!, $identificacion: String!, $email: String!) {
    editarUsuario($id: ID!, $nombreCompleto: String!, $identificacion: String!, $email: String!)  {
      id: &id
      nombreCompleto: $nombreCompleto
      identificacion: $identificacion
      email: $email
    }
  }
`

