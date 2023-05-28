import React from 'react'
import '../Style/LeftMenu.css'
import { NavLink } from 'react-router-dom'

function LeftMenu() {
  return (
<>
    <div className='left-menu'>
      <div className='left-menu-list'>
        <ul>
          <li>
            <NavLink to='/instagramhandling' >Instagram Handling</NavLink>
          </li>
          <li>
            <NavLink to='/photos'>Photos</NavLink>

          </li>
          <li>
            <NavLink to='/videos'>Videos</NavLink>
          </li>
          <li>
            <NavLink to='/likedsongs'>Liked Songs</NavLink>
          </li>
          
        </ul>
      </div>

    </div>
</>
  )
}

export {LeftMenu}
