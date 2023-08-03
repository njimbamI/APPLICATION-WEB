import React from 'react'
import { Link } from 'react-router-dom';


export const Navigation = () => {
    return (
        <div className=' flex justify-between items-center mb-3'>
            <img className='w-10' src="image/bolo.jpg" alt="logo" />
            <nav className='flex justify-end'>
                <Link className='mr-3'  to="/" >Accueil </Link>
                <Link className='mr-3' to="/ressources"> Ressources</Link>
                <Link to="/contact"> contact</Link>
            </nav>
        </div>
    )
}
