import React from 'react'
// import Albums from './Albums'
import BandsList from './BandsList'
import {SongsList} from './SongsList'
import Photos from './Photos';
import '../Style/MainContainer.css';
import { Routes , Route} from 'react-router-dom';

import InstagramHandling from'./InstagramHandling';
import { LikedSongs } from './LikedSongs';

function MainContainer() {
 
  return (
    <div className='main-container'>
        {/* <Albums/> */}
       
        
        {/* <PlayList/> */}
       
        
          <Routes>
            <Route  path="/bands" element={<BandsList/>}/>
            <Route  path="/songs" element={<SongsList />}/>
            <Route path='/instagramhandling' element={<InstagramHandling/>}/>
            <Route path='/photos' element={<Photos/>}/>
            <Route path='/likedsongs' element={<LikedSongs/>}/>
          </Routes>
        
        
        
    </div>
  )
}
export {MainContainer}