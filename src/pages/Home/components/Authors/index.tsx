import { Button } from '@/components/ui'
import { useNavigate } from 'react-router-dom'
import { AuthorHeader, AuthorHeading } from '../../styles'
import { authors } from '@/utils/authors'
import Author from './Author'

const index = () => {

    const navigate = useNavigate()

  return (
    <div className='flex flex-col space-y-16'>
        <AuthorHeader>
            <AuthorHeading>
                AUTHORS
            </AuthorHeading>
        
            <Button onClick={() => navigate('/authors')}>
                ALL AUTHORS
            </Button>
        </AuthorHeader>
        
        <div className='grid grid-cols-2 border border-black'>
            {authors.map((author, index) => {
                return <div key={index}>
                    <Author author={author} />
                </div>
            })}
        </div>
    </div>
  )
}

export default index