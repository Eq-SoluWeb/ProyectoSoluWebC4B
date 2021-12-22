import { gql } from '@apollo/client'

const INICIAR_FASE_PROYECTO = gql`
      
         
        mutation FaseIniciarProyecto($id: ID ){
            FaseIniciarProyecto(
        id:$id
         
        
    ){  
        id
        nombreProyecto
        estadoProyecto
        
    }
}
    `;

export default INICIAR_FASE_PROYECTO;