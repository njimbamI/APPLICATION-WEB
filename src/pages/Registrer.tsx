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
            <h1 className="text-3xl text-center font-extrabold">INSCRIPTION</h1>
            <div className="flex h-screen">
                <div className="w-2/3 bg-white flex items-center justify-center p-8 ">
                    <form onSubmit={handleSubmit} className="w-full max-w-sm">
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
                <div className="w-1/3 flex items-center justify-center">
                    {/* Remplacez l'URL de l'image par votre propre image */}
                    <img
                       src="images/bolo.jpg" alt="boloa"
                    />
                </div>
            </div>
        </div>
    )
}
