import { gql } from '@apollo/client'

const EDITAR_PROYECTO = gql`
        mutation editProyecto($nombreProyecto: String!, $fechaI: String!, $fechaT: String!, $objetivosG: [String], $objetivosE: [String], $presupuesto: Int!, $lider: String! ){            
            ActualizarDatosProyecto(id: $ID, input: {
                nombreProyecto: $nombreProyecto,
                fechaInicio: $fechaI,
                fechaTerminacion: $FechaT,
                objetivosGenerales: $objetivosG,
                objetivosEspecificos: $objetivosE,
                presupuesto: $presupuesto
                lider: $lider
            }) {
                id
                nombreProyecto
                fechaInicio
                fechaTerminacion
                objetivosGenerales
                objetivosEspecificos
                presupuesto
                estado
                lider{
                    id
                    nombreCompleto
                    identiicacion
                }
            }               
        }
    `;

export default EDITAR_PROYECTO;