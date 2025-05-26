import { FC } from 'react'
import magazine from '@/assets/mojtaba-mosayebzadeh-V9mVXYKGyxc-unsplash 1.png'

const Magazine: FC = () => {
  return (
    <div className='flex flex-col gap-5 items-start'>
      <div className='space-y-3'>
        <h3 className='text-sm font-bold'>PRINT MAGAZINE</h3>
        <div className='text-4xl font-bold'>03/2022</div>
      </div>
      <div className='flex flex-col gap-5 items-start'>
        <img src={magazine} width="100%" alt="" />
        <button className='bg-black text-white text-sm p-4 font-bold'>DOWNLOAD</button>
      </div>
    </div>
  )
}

export default Magazine