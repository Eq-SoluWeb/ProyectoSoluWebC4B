import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import EditarSolicitud from './editar/EditarSolicitud';
import ListarSolicitudes from './listar/ListarSolicitudes';
 
 
 

const SolicitudPage = () => {

    const { action } = useParams();

    console.log(action);

    return (
        <section className="content mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-primary card-outline">
                            <div className="card-header flex">
                                <h5 className="m-0">Solicitudes</h5>                                
                            </div>
                            <div className="card-body">
                                {action === '' || action === undefined ? <ListarSolicitudes /> : (action === 'editar') ? <EditarSolicitud /> : <EditarSolicitud />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SolicitudPage
