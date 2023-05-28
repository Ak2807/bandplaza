import './App.css';


import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate, } from 'react-router-dom'
import {Login} from './Components/Login'
import Home from './Components/Home';
import {validateUser} from './api/index'

import {app} from './config/firebase.config'
import {getAuth,} from 'firebase/auth'

import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';

// import { BottomPage } from './Components/BottomPage'
// import { LeftMenu } from './Components/LeftMenu';
// import { MainContainer } from './Components/MainContainer';
// import { TopPage } from './Components/TopPage';





function App() {
  // const[show,setShow] = useState(true);

  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();

  const [{user},dispatch] = useStateValue();
  
  const [auth,setAuth] = useState(false || window.localStorage.getItem("auth")==="true");

  useEffect(()=>{
    firebaseAuth.onAuthStateChanged((useCred)=>{
      if(useCred){
        useCred.getIdToken().then((token)=>{
          //console.log(token);
          window.localStorage.setItem("auth", "true");
          validateUser(token).then((data)=>{
            dispatch({
              type: actionType.SET_USER,
              user: data,
            })
            // console.log(data)
          });
        })
      }else{
        setAuth(false);
          window.localStorage.setItem("auth", "false");
          dispatch({
            type: actionType.SET_USER,
            user: null,
          })  
          navigate("/login");
      }

    })
      
  }, [])

  return (
<>
<div className='App'>
      <Routes>
        
        <Route path='/*' element={<Home/>}/>
        <Route path='/login' element={<Login setAuth={setAuth}/>} />
        
        
      </Routes>
    </div>

    {/* <div className='App'>
        <TopPage show={show} setShow={setShow}/>
         {show ? <LeftMenu /> : null} 
        <MainContainer/>
        <BottomPage />
   
      <div className='background'>
        
      </div>
      
  </div> */}
  
</>
  );
}

export default App;


