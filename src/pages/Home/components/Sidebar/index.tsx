import { FC } from 'react'
import Magazine from './Magazine'
import PopularArticles from './PopularArticles'
import Newsletter from './Newsletter'
import { articles } from '@/utils/articles'
import { PopularHeading } from '../../styles'

const Sidebar: FC = () => {

  const redirectToArticle = (id: number) => {
    console.log("here i am with id" + id)
  }

  return (
    <div className='w-[20%] flex flex-col gap-10'>
      <Magazine />
      <div>
        <PopularHeading>MOST POPULAR</PopularHeading>
        {articles.slice(0,3).map((article) => {
          return <div key={article.id}>
            <PopularArticles
              article={article}
              redirectToArticle={redirectToArticle}
            />
          </div>
        })}
      </div>
      <Newsletter />
    </div>
  )
}

export default Sidebar