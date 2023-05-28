import React from 'react'

import {Bands} from"./Bands";

function BandsList() {
  return (
    <div className='bands-list'>
        <h2 className='title'>
            Bands list
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
                        <p className='bandDetail'>{band?.bandDetail}</p>
                        <div className='hits'>

                        </div>

                        

                    </div>
                </div>
            </div>
                ))
             }   
        </div>

    </div>
  )
}

export default BandsList