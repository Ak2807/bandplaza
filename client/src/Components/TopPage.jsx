import React, { useState } from 'react'
import { NavBar } from './NavBar'
import '../Style/TopPage.css'
import logo from '../images/logo.png'
// import{Login} from './Login'
import { NavLink, useNavigate } from 'react-router-dom'
// import App from '../App'

import {motion} from 'framer-motion'
import { useStateValue } from '../context/StateProvider'

import { app } from '../config/firebase.config'
import { getAuth } from 'firebase/auth'



function TopPage({show,setShow}) {
  // const handlelogin=()=>{
  //   console.log(Login());
  // }


const[isMenu,setIsMenu] = useState(false);

  const navigate =useNavigate();
  const logOut=()=>{
    const firebaseAuth=getAuth(app);
    firebaseAuth.signOut().then(()=>{
      window.localStorage.setItem("auth","false");

    }).catch((e)=> console.log(e));
    navigate("/login", {replace : true})
  }
  const [{user},dispatch] = useStateValue();

  return (
<>
    <div className='topPage'>
        <div className='logoContainer'>
        <NavLink to={"/"}>
          <img src={logo} alt="logo"  />
        </NavLink> 
        </div> 
        <div className='option-container'>
          <ul className='top-menu'>
            <li className='home-1'>
              <NavLink to={'/home'} >Home</NavLink>
            </li>
            <li className='library-1'>
              <NavLink to={'/library'}>Library</NavLink>
            </li>
            <li className='about-1'>
              <NavLink to={'/about'}>About</NavLink>
            </li>
          </ul>
        </div>
        {/* <Login/> */}
        <div
          onMouseEnter={()=> setIsMenu(true)}
          onClick={()=>setIsMenu(false)}
          // onMouseLeave={()=>setIsMenu(false)}
           
        className='user-image-name'>
          <img className='user-img' src={user?.user.imageURL} alt='' referrerPolicy='no-referrer'/>
          <p className='user-text-name'>{user?.user?.name}</p>
          
        </div>
        {isMenu &&(
          <motion.div
            initial={{opacity: 0, y:50}}
            animate={{opacity:1, y: 0}}
            exit={{opacity: 0, y:50}}
             className='user-sign-out' >
          <NavLink to={'/userProfile'}>
            <p className='profile-div'>Profile</p>
           
          </NavLink>
          <hr/>
         
            <p className='signout-div' onClick={logOut}>Signout</p>
        </motion.div>
        )}
        {/* <div className='user-login-signup'>
          <button className='Login-user' ><Login/></button>
          
          <button className='Signup-user'>SignUp</button>
         
        </div> */}
    
        
    </div>
    <NavBar show={show} setShow={setShow}/>
</>       
  )
}
 export {TopPage}