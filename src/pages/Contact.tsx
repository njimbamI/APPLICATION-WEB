import React, { useState } from 'react';
import { Navigation } from '../navigation/Navigation'

export const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Ajoutez ici votre logique pour envoyer les données du formulaire
        // à votre serveur ou pour effectuer toute autre action nécessaire
        console.log('Données du formulaire :', { name, email, message });
        // Réinitialisez les champs du formulaire après la soumission
        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        <div className=''>
            <Navigation />
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <label className="mb-4">
                    Nom:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="block w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </label>
                <label className="mb-4">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="block w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </label>
                <label className="mb-4">
                    Message:
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="block w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </label>
                <button type="submit" className="px-6 mt-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Envoyer
                </button>
            </form>
        </div>
    );
}
