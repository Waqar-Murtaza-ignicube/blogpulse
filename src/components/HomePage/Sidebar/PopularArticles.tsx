import { FC } from 'react'

const PopularArticles: FC = () => {
  return (
    <div>
      <h3 className='text-sm mb-3 font-bold'>MOST POPULAR</h3>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-4'>
          <div className='font-bold text-xl'>01</div>
          <div>
            <h4 className='font-bold text-xl'>Street art festival</h4>
            <div><strong>Text</strong> Cristofer Vanacco</div>
          </div>
        </div>
        <div className='bg-black h-[2px] w-full'></div>
        <div className='flex gap-4'>
          <div className='font-bold text-xl'>02</div>
          <div>
            <h4 className='font-bold text-xl'>Hope dies last</h4>
            <div><strong>Text</strong> Anne Henry</div>
          </div>
        </div>
        <div className='bg-black h-[2px] w-full'></div>
        <div className='flex gap-4'>
          <div className='font-bold text-xl'>03</div>
          <div>
            <h4 className='font-bold text-xl'>Artists who want to rise above</h4>
            <div><strong>Text</strong> Anna Neilsen</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularArticles