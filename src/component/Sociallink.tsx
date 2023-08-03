import React from 'react'
import { FaYoutube,FaTwitter,FaInstagram } from 'react-icons/fa';

export const Sociallink = () => {
  return (
    <section className='mt-4'>
        <h3 className='text-2xl font-extrabold'>Liens vers les Reseaux</h3>
        <ul className='mt-4'>
            <li className='flex items-center'><FaYoutube className='mr-3'/><a href="">Youtube</a></li>
            <li className='flex items-center'><FaTwitter className='mr-3'/><a href="">Twitter</a></li>
            <li className='flex items-center'><FaInstagram className='mr-3'/><a href="">Instagram</a></li>
        </ul>
    </section>
  )
}
