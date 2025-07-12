import React from 'react'
import certificate from '../../assets/Certificate'
import './certificate.css'
const Certificate = () => {
  return (

    
    <div className='certificates-container'>
        <div className='title'>
<h1 >Certifications</h1>
        </div>
        
        
      <div className='allCertficate'>
{
    certificate.map((cert,index)=>{
        return(




<div key={index} className='certificates'>
<h2>{cert.s_no}</h2>
<h3>{cert.s_des}</h3>
        </div>

        )
        

    })
}
      </div>
    </div>
  )
 
}

export default Certificate
