import React, { useEffect, useState } from 'react';
import { List } from '../component/List'
import { Navigation } from '../navigation/Navigation';
import { Article } from '../interfaces'



export const Ressource = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [numberOfPost, setNumberOfPost] = useState<number>(5);
  

  const localsimple = () => localStorage.getItem('number') ||numberOfPost;
  const localnouveau = localsimple();
  useEffect(() => {
    const getposts = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${localnouveau}`);
        const data: Article[] = await response.json()
        setArticles(data);

      } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
      }
    };
    getposts();
  }, [localnouveau]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPost(+e.target.value)
    localStorage.setItem('number', e.target.value)
  };

  return (
    <div className=''>
      <Navigation />
      <h1>LISTE DES ARTICLES</h1>
      <div className='flex flex-col'>
        <label htmlFor=""> nombre de publication {localnouveau} </label>
        <input type="range" min={1} max={20} onChange={onChange} defaultValue={localnouveau} />
        <List articles={articles} />
      </div>
    </div>
  )
}
