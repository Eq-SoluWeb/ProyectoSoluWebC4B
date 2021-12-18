import { gql } from '@apollo/client'

export const EDIT_USUARIO = gql`
  mutation editarUsuario($nombreCompleto: String!, $identificacion: String!, $email: String!) {
    editarUsuario($nombreCompleto: String!, $identificacion: String!, $email: String!)  {
      id
      nombreCompleto
      identificacion
      email
    }
  }
`

