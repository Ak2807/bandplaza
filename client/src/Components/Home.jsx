import '../App.css'

import { LeftMenu } from './LeftMenu';
import { MainContainer } from './MainContainer';

import { TopPage } from './TopPage';
import React, { useState } from 'react'

function Home() {
    const[show,setShow] = useState(false);
  return (
    <div className='Home'>
        <TopPage show={show} setShow={setShow}/>
        {show ? <LeftMenu /> : null}
        
        <MainContainer/>
        {/* <MusicPlayer /> */}

        <div className='background'>
            
        </div>
    
    </div>
  )
}

export default Home