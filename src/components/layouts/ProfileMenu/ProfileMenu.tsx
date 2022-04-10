import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './styles.scss'
import { Icons, Images, LibraryIcons } from '../../../utils'

export type TProfileMenuProps = {

}

export const ProfileMenu: React.FC<TProfileMenuProps> = () => {

  const isTabletOrMoblie = useMediaQuery({ query: '(max-width: 512px)'});

  return (
    <div>
      {isTabletOrMoblie? (
        <div className='profileMenu'>
          <img src={Icons.profileCircle} alt="" width={22} height={22} />
          <LibraryIcons.KeyboardArrowDownIcon sx={{ fontSize: '22px' }} />
        </div>        
      ): (
        <div className='profileMenu'>
          <img src={Icons.profileCircle} alt="" width={22} height={22} />
          <p className='profileMenu__title'>Laura Martin</p>
          <LibraryIcons.KeyboardArrowDownIcon sx={{ fontSize: '22px' }} />
        </div>        
      )}      
    </div>
  )
}