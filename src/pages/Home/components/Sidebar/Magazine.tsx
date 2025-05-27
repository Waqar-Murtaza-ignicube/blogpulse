import { FC } from 'react'
import coverImage from '@/assets/magazin-cover.svg'
import { LinkButton } from '@/components/ui'
import {
  SidebarMagazineContainer,
  SidebarMagazineDate,
  SidebarMagazineHeading
} from '../../styles'

const Magazine: FC = () => {
  return (
    <SidebarMagazineContainer>
      <div className='space-y-3'>
        <SidebarMagazineHeading>PRINT MAGAZINE</SidebarMagazineHeading>
        <SidebarMagazineDate>03/2022</SidebarMagazineDate>
      </div>
      <SidebarMagazineContainer>
        <img src={coverImage} width="100%" alt="" />
        <LinkButton variant='dark' className='py-3' to='/'>
          download
        </LinkButton>
      </SidebarMagazineContainer>
    </SidebarMagazineContainer>
  )
}

export default Magazine