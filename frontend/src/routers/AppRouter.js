import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NoAutorizado from '../components/portada/NoAutorizado';
import PortadaPage from '../components/portada/PortadaPage';
import ContentRoutes from './ContentRoutes';

const AppRouter = () => {
    return (        
        <BrowserRouter>
            <Routes>
                <Route exact path="/portada" element={<PortadaPage />} />
                <Route exact path="/noautorizado" element={<NoAutorizado />} />
           
                <Route path="/*" element={<ContentRoutes />} />
                </Routes>
                
        </BrowserRouter>
    )
}

export default AppRouter
