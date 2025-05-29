import { FC } from 'react'
import { SingleAuthor } from '../../types';
import {
    AuthorContentBlock,
    AuthorMetaData,
    AuthorName,
    AuthorWrapper
} from '../../styles';

interface AuthorProps {
    author: SingleAuthor
}

const Author: FC<AuthorProps> = ({
    author
}) => {
  return (
    <AuthorWrapper>
        <img 
            src={author.profile}
            alt=""
            className='rounded-full object-contain'
            width={150} height={150}
        />
        <AuthorContentBlock>
            <AuthorName>
                {author.name}
            </AuthorName>
            <div className='flex gap-10'>
                <AuthorMetaData>
                    <strong>Job</strong>
                    {author.role}
                </AuthorMetaData>
                <AuthorMetaData>
                    <strong>City</strong>
                    {author.city}
                </AuthorMetaData>
            </div>
        </AuthorContentBlock>
    </AuthorWrapper>
  )
}

export default Author