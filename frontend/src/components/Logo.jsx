import React from 'react';
import icono from '../Media/jarlyLogo.png';
import icono2 from '../Media/avata.png'

const Logo = () => {
    return (
     <h1>Bienvenido</h1>
    )
}

const Avatar = () =>{
    return (
        <img src={icono2} alt="icono" className="h-20 rounded-2xl" />   
       )
}

export {Logo, Avatar};
