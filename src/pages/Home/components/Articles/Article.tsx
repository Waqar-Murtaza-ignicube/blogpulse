import { FC } from "react"
import { SingleArticle } from "@/pages/Home/types"
import {
    ArticleContainer,
    ArticleMetaDataCategory,
    ArticleMetaDataContainer,
    ArticleMetaDataContentBlock,
    ArticleMetaDataWrapper,
    ArticleName
} from "../../styles"

interface ArticleProps {
    article: SingleArticle
}

const Article: FC<ArticleProps> = ({article}) => {
  return (
    <div className="flex gap-10">
        <img src={article.image} alt="" />
        <ArticleContainer>
            <div className="space-y-7">
                <ArticleName>{article.name}</ArticleName>
                <p>{article.body}</p>
            </div>
            <ArticleMetaDataWrapper>
                <ArticleMetaDataContainer>
                    <ArticleMetaDataContentBlock>
                        <strong>Text</strong>
                        <p>{article.author}</p>
                    </ArticleMetaDataContentBlock>
                    
                    <ArticleMetaDataContentBlock>
                        <strong>Date</strong>
                        <p>{article.date}</p>
                    </ArticleMetaDataContentBlock>
                    
                    <ArticleMetaDataContentBlock>
                        <strong>Duration</strong>
                        <p>{article.duration}</p>
                    </ArticleMetaDataContentBlock>
                </ArticleMetaDataContainer>
                <ArticleMetaDataCategory>
                    <span>{article.category}</span>
                </ArticleMetaDataCategory>
            </ArticleMetaDataWrapper>
        </ArticleContainer>
    </div>
  )
}

export default Article