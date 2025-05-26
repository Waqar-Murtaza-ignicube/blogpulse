import { FC } from 'react'

const Newsletter: FC = () => {
  return (
    <div className='p-6 bg-gray-100'>
        <div className='space-y-2 mb-5'>
            <h4 className='font-bold'>NEWSLETTER</h4>
            <div className='text-3xl font-bold'>Design News to <br />your inbox</div>
        </div>
        <div className='space-y-3'>
            <input type="email" name="email" id="email" placeholder='Email' className='p-2 bg-white w-full'/>
            <button className='text-sm py-3 px-4 text-white bg-black'>SIGN UP</button>
        </div>
    </div>
  )
}

export default Newsletter