import React from 'react'
import { Link } from 'react-router-dom';


export const Navigation = () => {
    return (
        <div className=' flex justify-between items-center mb-3'>
            <img className='w-10' src="images/bolo.jpg" alt="logo" />
            <nav className='flex justify-end'>
                <Link className='mr-3' to="/" > Accueil </Link>
                <Link className='mr-3' to="/ressource"> Ressource</Link>
                <Link className='mr-3' to="/inscription">Inscription</Link>
                <Link className='mr-3' to="/connexion">Connexion</Link>
                <Link to="/contact"> Contact</Link>
            </nav>
        </div>
    )
}
