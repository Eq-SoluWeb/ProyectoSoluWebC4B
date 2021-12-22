import React from 'react'
import {Card} from 'react-bootstrap'

function Proyecto({proyecto}) {
    
     
    
    return (
        <Card  >

  
            <div className="card-body">
                <div className="card-title text-right">
                    <h3>Proyecto:{proyecto.nombreProyecto}</h3>
                    <button className="btn btn-sm btn-outline-primary">Terminar</button>
                    <div className="card-text">
                        <p><strong>Fecha Inicio</strong>{proyecto.fechaInicio}</p>
                        <p><strong>Fecha Final</strong>{proyecto.fechaTerminacion}</p>
                        <p><strong>Lider</strong>{proyecto.lider.nombreCompleto}</p>
                        <p><strong>Estado Actual:</strong>{proyecto.estadoProyecto}</p>
                        <p><strong>Fase Actual:</strong>{proyecto.faseProyecto}</p>
                        <p><strong>Objetivos Generales</strong>{proyecto.objetivosGenerales}</p>
                        <hr />
                        <div className="d-flex justify-content-end">
                        <button className="btn btn-sm btn-outline-success mr-2">Editar</button>
                        <button className="btn btn-sm btn-outline-danger">Eliminar</button>
                        </div>
                    </div>
                </div>
          

        </div>

    </Card>
    )
}

export default Proyecto
