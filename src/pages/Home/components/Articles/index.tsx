import  { FC } from 'react'
import Article from './Article'
import { ArrowRight } from 'lucide-react'
import { articles } from '@/utils/articles'
import { useNavigate } from 'react-router-dom'
import HorizontalLine from '@/components/ui/HorizontalLine'

const Articles: FC = () => {

  const navigate = useNavigate()

  const redirectToArticlesPage = () => {
    navigate('/articles')
  }

  return (
    <div className='w-[80%] space-y-12'>
      {articles.map((article, index) => (
        <div key={index} className='space-y-12'>
          <Article article={article} />
          <HorizontalLine />
        </div>
      ))}
      <button className='flex gap-2' onClick={redirectToArticlesPage}>
        ALL ARTICLES <ArrowRight />
      </button>
    </div>
  )
}

export default Articles