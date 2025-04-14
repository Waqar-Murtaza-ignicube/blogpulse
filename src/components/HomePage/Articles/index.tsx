import  { FC } from 'react'
import Article from './Article'
import { ArrowRight } from 'lucide-react'
import { articles } from '../../../utils/articles'
import { useNavigate } from 'react-router-dom'

const Articles: FC = () => {

  const navigate = useNavigate()

  const redirectToArticlesPage = () => {
    navigate('/articles')
  }

  return (
    <div className='w-[80%] space-y-12'>
      {articles.map((article, index) => (
        <div key={index} className='space-y-12'>
          <div>
          <Article article={article} />
          </div>
          <div className='bg-black h-[2px] w-full'></div>
        </div>
      ))}
      <button className='flex gap-2' onClick={redirectToArticlesPage}>
        ALL ARTICLES <ArrowRight />
      </button>
    </div>
  )
}

export default Articles