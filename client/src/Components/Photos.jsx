import React from 'react'
import { Bands } from './Bands'
import '../Style/MainContainer.css'
function Photos() {
  return (
    <div className='bands-list'>
    <h2 className='title'>
        Photos
    </h2>
    <div className='bands-container'>

         {
            Bands && 
            Bands.map((band, index)=>(

        <div className='bands' Key={band?.id} >
            <div className="count">{`#${index+1}`}</div>
            <div className='band'>
                <div className='imgBox'>
                    <img src={band?.imgSrc} alt=""/>
                </div>
                <div className='section'>
                    <p className='bandName'>
                        {band?.bandName}
                        
                    </p>
                   
                   

                    

                </div>
            </div>
        </div>
            ))
         }   
    </div>

</div>
  )
}

export default Photos