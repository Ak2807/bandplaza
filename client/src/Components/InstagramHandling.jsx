import React from 'react'
import { Instagrams } from './Instagrams'
import  '../Style/MainContainer.css'


function InstagramHandling() {
  return (
    <div >
       <>
    <div className="songs-list">
    <h2 className="title">
      Users <span></span>
    </h2>

    <div className="songsContainer">
      {Instagrams &&
        Instagrams.map((instagram, index) => (
          <div
            className="songs"
            key={instagram?.id}
            

        
          >
            <div className="count">
              <p>{`#${index + 1}`}</p>
            </div>
            <div className="song">
              <div className="imgBox">
                <img src={instagram?.imgSrc} alt="" />
              </div>
              <div className="section">
                <p className="songName">
                  {instagram?.UserName}{" "}
                  <span className="songSpan">{instagram?.UserId}</span>
                </p>

                
              </div>
            </div>
          </div>
        ))}

    </div>


  </div>

</>

    </div>
  
  )
}

export default InstagramHandling