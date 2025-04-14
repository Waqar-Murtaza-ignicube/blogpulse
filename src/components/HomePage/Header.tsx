import { FC } from "react"
import image from "../../assets/header-image.png"
import artlife from "../../assets/artlife.svg"
import Ticker from "../Footer/Ticker"
import { articleTickers } from "../../utils/ticker"
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
} from "./styles"

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
                <div className=""> 
                    <LeadArticleHeading>DON'T CLOSE YOUR EYES</LeadArticleHeading>
                </div>
                <ArticleMetaData>
                    <div className="">  
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit unde, soluta, error sunt, aspernatur necessitatibus magni expedita exercitationem ab aperiam debitis illum totam modi nihil accusamus ratione fugiat fuga molestiae.</p>
                    </div>
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