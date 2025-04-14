import { FC } from 'react'
import Magazine from './Magazine'
import PopularArticles from './PopularArticles'
import Newsletter from './Newsletter'

const Sidebar: FC = () => {
  return (
    <div className='w-[20%] flex flex-col gap-10'>
        <Magazine />
        <PopularArticles />
        <Newsletter />
    </div>
  )
}

export default Sidebar