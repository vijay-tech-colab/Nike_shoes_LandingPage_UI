import React from 'react'
import headerLogo from '../assets/logo.png'
import Button from './Button'
function Header() {
  return (
    <header>
        <div className='logo-section'>
            <img src={headerLogo} alt="" />
        </div>
        <div className='menu-section'>
            <nav >
                <ul>
                    <li>menu</li>
                    <li>location</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </nav>
        </div>
        <div className='btn-section'>
            <Button className='login_btn'>Login</Button>
        </div>
    </header>
  )
}

export default Header