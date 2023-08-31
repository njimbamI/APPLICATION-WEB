import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Navigation } from '../navigation/Navigation';
import { Article } from '../interfaces'
import { DetProduit } from '../component/DetProduit';


type PParams = {
  id: string;
};

export const Detail = () => {
  const { id } = useParams<PParams>();
  const [first, setFirst] = useState<Article | null>(null);

  useEffect(() => {
    const getposts = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data: Article = await response.json()
        setFirst(data);

      } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
      }
    };
    getposts();
  }, [id]);

  return (
    <div>
      <Navigation />
      <h1>Detail DE l'ARTICLE</h1>
      <DetProduit first={first} />
    </div>
  )
}
