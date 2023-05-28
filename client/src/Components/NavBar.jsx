import React, { useState } from 'react'
import {BiMenu,BiSearchAlt} from 'react-icons/bi'

import { NavLink } from 'react-router-dom'

import '../Style/NavBar.css'
// import { LeftMenu } from './LeftMenu'

function NavBar({show,setShow}) {
 
  const[value,setValue]= useState(" ");
  function Handleclick(){
    setShow(!show)

  }
  function Handlesubmit(){
    console.log(value)
  }
  return (
    <div className='navBar'>
      
      
        <div className='mainmenu'>
        <i >
          <BiMenu onClick={Handleclick} />
        </i>
        </div>
      <div className='menu-list'>
        <ul className='Nav-list'>
           
           <li className='Bands-1'>
            
            <NavLink to={'/bands'} >Bands</NavLink>
           
           </li>
           
           <li className='song-1'>
           
             <NavLink to={'/songs'}>Songs</NavLink>
           
           </li>
           
           <li className='PlayList-1'>
           
             <NavLink to={'/playlist'} >PlayList</NavLink>
           
           </li>
            
         </ul>


         
      </div>
      <form>
      <div className='searchBox'>
       
        <input type="text" placeholder='search...' onSubmit={Handlesubmit} value={value } onChange={(e)=>setValue(e.target.value)}/>
        <i className='searchIcon'>
          <BiSearchAlt/>
        </i>
        

      </div>
      </form>
      
      
     
     

      

    </div>
  )
}
export {NavBar}
