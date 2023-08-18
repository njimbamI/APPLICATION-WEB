import React, { useState } from 'react';
import { Navigation } from '../navigation/Navigation';

export const Registrer = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Ajoutez ici votre logique pour l'inscription
        console.log('Données d\'inscription :', { username, email, password });
        // Réinitialisez les champs après l'inscription
        setUsername('');
        setEmail('');
        setPassword('');
    };

  return (
    <div>
            <Navigation />
            <div className='flex items-center'>
                <div className="flex justify-center items-center h-screen w-2/3">
                    <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Inscription</h2>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                                Nom d'utilisateur
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="mt-1 p-2 w-full border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Adresse e-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 p-2 w-full border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="mt-1 p-2 w-full border border-gray-300 rounded"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            S'inscrire
                        </button>
                    </form>
                </div>
                <div className='w-1/3'>
                    <img src="images/bolo.jpg" alt="boloa" />
                </div>
            </div>
        </div>
  )
}
