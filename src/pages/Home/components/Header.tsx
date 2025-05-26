import { FC } from "react"
import image from "@/assets/header-image.png"
import artlife from "@/assets/artlife.svg"
import Ticker from "@/components/Layout/Footer/Ticker"
import { articleTickers } from "@/utils/ticker"
import {
    ArticleMetaData,
    ArticleMetaDataCategory,
    ArticleMetaDataContainer,
    ArticleMetaDataContentBlock,
    ArticleMetaDataWrapper,
    LeadArticleContainer,
    LeadArticleHeading,
    LeadArticleWrapper,
    TickerContainer
} from "./../styles"

const Header: FC = () => {
  return (
      <div className='flex flex-col gap-12'>
        <div className="mt-4">
            <img src={artlife} width="100%" alt="" />
        </div>
        <TickerContainer >
            <div className="font-bold text-2xl px-2 w-[45%]">LATEST NEWS+++</div>
            <Ticker tickers={articleTickers}/>
        </TickerContainer>
        <LeadArticleWrapper>
            <LeadArticleContainer>
                <LeadArticleHeading>DON'T CLOSE YOUR EYES</LeadArticleHeading>
                <ArticleMetaData>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minima quas consectetur, accusamus libero, ab nam animi dicta iusto quo dignissimos nulla nihil ducimus velit rem, voluptatum iure amet consequatur nostrum ad. Inventore, corporis minus excepturi ipsa perspiciatis voluptatum? Animi necessitatibus quibusdam expedita voluptatem reiciendis blanditiis, explicabo asperiores eaque, accusantium tempora temporibus optio eum! Incidunt quaerat consequatur dolore sunt et.</p>
                    <ArticleMetaDataWrapper>
                        <ArticleMetaDataContainer>
                            <ArticleMetaDataContentBlock>
                                <strong>Text</strong>
                                <p>Jakob Gronberg</p>
                            </ArticleMetaDataContentBlock>
                            
                            <ArticleMetaDataContentBlock>
                                <strong>Date</strong>
                                <p>16. March 2022</p>
                            </ArticleMetaDataContentBlock>
                            
                            <ArticleMetaDataContentBlock>
                                <strong>Duration</strong>
                                <p>1 Min</p>
                            </ArticleMetaDataContentBlock>
                        </ArticleMetaDataContainer>
                        <ArticleMetaDataCategory>
                            <span>label</span>
                        </ArticleMetaDataCategory>
                    </ArticleMetaDataWrapper>
                </ArticleMetaData>
            </LeadArticleContainer>
            <div>
                <img src={image} width="100%" alt="" />
            </div>
        </LeadArticleWrapper>
        
    </div>
  )
}

export default Header