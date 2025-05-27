import  { FC } from 'react'
import Article from './Article'
import { articles } from '@/utils/articles'
import { useNavigate } from 'react-router-dom'
import { Button, HorizontalLine } from '@/components/ui'

const Articles: FC = () => {

  const navigate = useNavigate()

  return (
    <div className='w-[80%] space-y-12'>
      {articles.map((article, index) => (
        <div key={index} className='space-y-12'>
          <Article article={article} />
          <HorizontalLine />
        </div>
      ))}
      <Button onClick={() => navigate('/articles')}>
        ALL ARTICLES
      </Button>
    </div>
  )
}

export default Articles