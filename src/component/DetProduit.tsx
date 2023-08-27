import React from 'react'
import {Article} from '../interfaces';
import { Link } from 'react-router-dom';

interface DetProps {
   first: Article | null;
}

export const DetProduit: React.FC<DetProps> = ({ first }) => {
  return (
    <div className='text-center'>
        <h1>Publication numero: {first?.id}</h1>
        <h2>TITRE: {first?.title}</h2>
        <p> {first?.body}</p>
        <Link to="/ressource">RETOUR</Link>
    </div>
  )
}
