import { FC } from 'react'
import { HorizontalLine } from '@/components/ui'
import {
  PopularBlock,
  PopularHeading,
  PopularItem,
  PopularItemHeading,
  PopularWrapper
} from '../../styles'

const PopularArticles: FC = () => {
  return (
    <div>
      <PopularHeading>MOST POPULAR</PopularHeading>
      <PopularWrapper>
        <PopularBlock>
          <PopularItem>01</PopularItem>
          <div>
            <PopularItemHeading>Street art festival</PopularItemHeading>
            <div><strong>Text</strong> Cristofer Vanacco</div>
          </div>
        </PopularBlock>
        <HorizontalLine />
        <PopularBlock>
          <PopularItem>02</PopularItem>
          <div>
            <PopularItemHeading>Hope dies last</PopularItemHeading>
            <div><strong>Text</strong> Anne Henry</div>
          </div>
        </PopularBlock>
        <HorizontalLine />
        <PopularBlock>
          <PopularItem>03</PopularItem>
          <div>
            <PopularItemHeading>Artists who want to rise above</PopularItemHeading>
            <div><strong>Text</strong> Anna Neilsen</div>
          </div>
        </PopularBlock>
      </PopularWrapper>
    </div>
  )
}

export default PopularArticles