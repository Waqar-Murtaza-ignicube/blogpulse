import { FC } from 'react'
import { HorizontalLine } from '@/components/ui'
import { SingleArticle } from '../../types'
import {
  PopularBlock,
  PopularItem,
  PopularItemHeading,
  PopularWrapper
} from '../../styles'

interface PopularArticlesProps {
  article: SingleArticle;
  redirectToArticle: (id: number) => void;
}

const PopularArticles: FC<PopularArticlesProps> = ({
  article,
  redirectToArticle,
}) => {
  return (
    <div
      className='cursor-pointer'
      onClick={() => redirectToArticle(article.id)}
    >
      <PopularWrapper>
        <PopularBlock>
          <PopularItem>0{article.id}</PopularItem>
          <div>
            <PopularItemHeading>{article.name}</PopularItemHeading>
            <div
              className='flex gap-3'>
              <strong>Author</strong>
              {article.author}
            </div>
          </div>
        </PopularBlock>
        <HorizontalLine />
      </PopularWrapper>
    </div>
  )
}

export default PopularArticles