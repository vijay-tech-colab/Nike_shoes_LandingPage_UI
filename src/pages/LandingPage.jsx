import React from 'react'
import Button from '../components/Button'
import landingShoes from '../assets/shoes1.webp'
import SocialLinkIcons from '../components/SocialLinkIcons'
function LandingPage() {
  return (
    <div className='container'>
        <div className='left_side_section'>
            <h1>
                Your Feet Deserve the Best 
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci enim tempore magni ipsum quae officiis, facilis numquam id optio vitae reprehenderit aut a possimus similique dignissimos nostrum quibusdam deleniti!</p>
            <div className='btn-container'>
                <Button className='login_btn'>Show Now</Button>
                <Button className='category_btn'>Category</Button>
            </div>
            <SocialLinkIcons/>
        </div>
        <div className='right_side_section'>
            <img src={landingShoes} alt="" />
        </div>
    </div>
  )
}

export default LandingPage