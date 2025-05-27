import { FC } from 'react'
import { LinkButton } from '@/components/ui'
import {
  NewsLetterBlock,
  NewsLetterSubHeading,
  NewsLetterWrapper
} from '../../styles'

const Newsletter: FC = () => {
  return (
    <NewsLetterWrapper>
      <NewsLetterBlock>
        <h4 className='font-bold'>NEWSLETTER</h4>
        <NewsLetterSubHeading>
          Design News to <br />your inbox
        </NewsLetterSubHeading>
      </NewsLetterBlock>
      <div className='space-y-3'>
        <input
          type="email"
          name="email"
          id="email"
          placeholder='Email'
          className='p-2 bg-white w-full'
        />
        <LinkButton to='/' variant='dark' className='py-2.5 w-fit'>
          Sign up
        </LinkButton>
      </div>
    </NewsLetterWrapper>
  )
}

export default Newsletter