import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PortadaPage from '../components/portada/PortadaPage';
import ContentRoutes from './ContentRoutes';

const AppRouter = () => {
    return (        
        <BrowserRouter>
            <Routes>
                <Route path="/portada" element={<PortadaPage />} />
                <Route path="/*" element={<ContentRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
