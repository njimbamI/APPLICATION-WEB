import React from 'react'
import { Article } from '../interfaces';
import { useNavigate } from 'react-router-dom';
interface ListProps {
  articles: Article[] | null;
}

export const List: React.FC<ListProps> = ({ articles }) => {
  const navigate = useNavigate()
  return (
    <div className=''>
      <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 cursor: pointer   '>
        {articles?.map(article => (
          <li key={article.id} onClick={() => navigate(`/${article.id}`)} className="border p-4 ">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p>{article.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
