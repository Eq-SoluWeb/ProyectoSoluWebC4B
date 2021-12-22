import { gql } from '@apollo/client'

const DESINICIAR_FASE_PROYECTO = gql`
      
         
        mutation FaseDesIniciarProyecto($id: ID ){
            FaseDesIniciarProyecto(
        id:$id
         
        
    ){  
        id
        nombreProyecto
        estadoProyecto
        
    }
}
    `;

export default DESINICIAR_FASE_PROYECTO;