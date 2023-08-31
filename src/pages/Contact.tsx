import React, { useState } from 'react';
import { Navigation } from '../navigation/Navigation'
import emailjs from "@emailjs/browser"


type formInputs = {
    name: string,
    email: string,
    message: string
}


export const Contact:React.FC<formInputs> = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation des données
        if (!name || !email || !message) {
            console.log('Veuillez remplir tous les champs.');
            return;
        }
        // Ajoutez ici votre logique pour envoyer les données du formulaire
        // à votre serveur ou pour effectuer toute autre action nécessaire
        //console.log('Données du formulaire :', { name, email, message });
        emailjs.send(
            'service_dt18le5',
            'template_brqewks',
            {
                name: name,
                email: email,
                message: message
            },
            'ty835pvPO26jiZStU'
        )
        // Réinitialisez les champs du formulaire après la soumission
        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        <div>
            <Navigation />
            <h1 className='text-3xl text-center font-extrabold'>CONTACTEZ NOUS</h1>
            <div className='flex '>
                <div className='w-2/3 bg-white flex items-center justify-center p-8'>
                    <form onSubmit={handleSubmit} className="w-full max-w-md ">
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
                        <button type="submit" className="px-6 mt-4 py-3 bg-blue-500 text-white w-full rounded hover:bg-blue-600">
                            Envoyer
                        </button>
                    </form>
                </div>
                <div className='w-1/3 flex items-center justify-center '>
                    <img src="images/bolo.jpg" alt="boloa" />
                </div>
            </div>
        </div>
    );
}
