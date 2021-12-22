import { gql } from '@apollo/client'

const SET_SOLICITUD = gql`
        mutation  setSolicitud($proyecto:String,$usuario:String)
        {AgregarSolicitud(solicitud:{proyecto:$proyecto,
                                    usuario:$usuario})
                                    {proyecto{id,nombreProyecto},
                                    usuario{id,nombreCompleto}
                                    
                                    }
        
                      
        }
    `;


export default SET_SOLICITUD;