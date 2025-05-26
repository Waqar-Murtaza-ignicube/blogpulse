import { FC } from "react"
import { SingleArticle } from "@/pages/Home/types"

interface ArticleProps {
    article: SingleArticle
}

const Article: FC<ArticleProps> = ({article}) => {
  return (
    <div className="flex gap-10">
        <img src={article.image} alt="" />
        <div className="flex flex-col justify-between">
            <div className="space-y-7">
                <h2 className="text-4xl font-semibold">{article.name}</h2>
                <p>{article.body}</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center justify-start gap-5">
                    <div className='flex items-center justify-between gap-3'>
                        <strong>Text</strong>
                        <p>{article.author}</p>
                    </div>
                    
                    <div className='flex items-center justify-between gap-3'>
                        <strong>Date</strong>
                        <p>{article.date}</p>
                    </div>
                    
                    <div className='flex items-center justify-between gap-3'>
                        <strong>Duration</strong>
                        <p>{article.duration}</p>
                    </div>
                </div>
                <div className="py-2 px-5 border border-black rounded-3xl">
                    <span>{article.category}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Article