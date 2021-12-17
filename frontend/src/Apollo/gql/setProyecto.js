import { gql } from '@apollo/client'

const SET_PROYECTO = gql`
        mutation setProyecto($nombreProyecto: String!, $fechaI: String!, $fechaT: String!, $objetivosG: [String], $objetivosE: [String], $presupuesto: Int!, $lider: String! ){            
            AgregarProyecto(proyecto : {
                nombreProyecto: $nombreProyecto,
                fechaInicio: $fechaI,
                fechaTerminacion: $FechaT,
                objetivosGenerales: $objetivosG,
                objetivosEspecificos: $objetivosE,
                presupuesto: $presupuesto
                lider: $lider
            }) {
                nombreProyecto
                fechaInicio
                fechaTerminacion
                objetivosGenerales
                objetivosEspecificos
                presupuesto
                lider{
                    id
                    nombreCompleto
                    identiicacion
                }
            }               
        }
    `;

export default SET_PROYECTO;