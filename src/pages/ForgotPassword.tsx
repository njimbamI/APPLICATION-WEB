import React, { useState } from 'react';
import { Navigation } from '../navigation/Navigation';


interface ForgotPasswordProps {
    // Propriétés si nécessaires
}


export const ForgotPassword: React.FC<ForgotPasswordProps> = () => {

    const [email, setEmail] = useState<string>('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Ajoutez ici la logique pour envoyer un e-mail de réinitialisation de mot de passe
        console.log('Envoyer un e-mail de réinitialisation à :', email);
    };


    return (
        <div>
            <Navigation />
            <h1 className="text-3xl font-semibold text-center">Mot de passe oublié</h1>
            <div className="container mx-auto py-8 flex items-center">
                <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto w-2/3">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Adresse e-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 p-2 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        Réinitialiser le mot de passe
                    </button>
                </form>
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
