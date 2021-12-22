import { gql } from '@apollo/client'

const GET_MIS_PROYECTOS = gql`
query  VerMisProyectos($id:ID){            
    MisProyectos(idUsuario:$id) 
    {
        id
        nombreProyecto
        faseProyecto
        estadoProyecto
        fechaInicio
        fechaTerminacion
    }
}`;
export default GET_MIS_PROYECTOS