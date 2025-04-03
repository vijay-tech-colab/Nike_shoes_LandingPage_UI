import React from 'react'
import amezonIcon from '../assets/amazon-logo.png'
import flipCartIcon from '../assets/flipkart.webp'
function SocialLinkIcons() {
  return (
    <div className='image-container'>
        <h3>Also Available On.</h3>
        <div className='image-link-container'>
            <img src={flipCartIcon} alt=""/>
            <img src={amezonIcon} alt="" className='amezon-logo'/>
        </div>
    </div>
  )
}

export default SocialLinkIcons