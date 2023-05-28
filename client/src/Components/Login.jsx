import React, { useEffect } from 'react'
import { app } from '../config/firebase.config'
import {getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import '../Style/login.css'
import '../Style/TopPage.css'

import { useStateValue } from '../context/StateProvider'

import { validateUser } from '../api'
import { actionType } from '../context/reducer'

import {LoginBg} from '../assets/video'



const Login = ({setAuth}) => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();

    const [{user},dispatch]= useStateValue();

    const loginWithGoogle = async () => {
      await signInWithPopup(firebaseAuth,provider).then((userCred)=> {
        if(userCred){
          setAuth(true);
          window.localStorage.setItem("auth","true");
          firebaseAuth.onAuthStateChanged((userCred)=>{
            if(userCred){
              userCred.getIdToken().then((token)=>{
                // console.log(token);
                validateUser(token).then((data)=>{
                  dispatch({
                    type: actionType.SET_USER,
                    user: data,
                  })
                })
              })
              navigate("/",{replace: true})
            }
            else{
              setAuth(false);
              dispatch({
                type: actionType.SET_USER,
                user: null
              })
              navigate("/login")
            }
          })
        }
      })
    } 
    
    useEffect(()=>{
      if(window.localStorage.getItem("auth")==="true"){
        navigate("/",{replace:true})
      }
    },[]);

  return (
    
    <div className='login-div1' >
      <video src={LoginBg}
          type="video/mp4"
          autoPlay
          muted
          loop
          className='video-div'/>
    <div className='login-div2'>
      <div className='login-div3'>
        <div className='login-div4' onClick={loginWithGoogle}>
          <FcGoogle/>
          Signin with Google
        </div>
      </div>
    </div>
  </div>
    
  );
}

export {Login}