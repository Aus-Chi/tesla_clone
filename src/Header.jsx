import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HeaderBlock from './HeaderBlock';
import Menu from './Menu.jsx'
import TeslaAccount from './TeslaAccount';

function Header({isMenuOpen, setIsMenuOpen}) {
  return (
    <>
    <div className='header'>
      <div className="header__logo">
        <Link to="/">
          <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="" className='header__logo-img' />
        </Link>
      </div>
      <div className="header__links">
        <Link to="/">Model S</Link>
        <Link to="/">Model 3</Link>
        <Link to="/">Model X</Link>
        <Link to="/">Model Y</Link>
        <Link to="/">Solar Roof</Link>
        <Link to="/">Solar Panels</Link>
      </div>
      <div className="header__right">
        <Link to='/' className={isMenuOpen && 'header__link--hidden'}>Shop</Link>
        <Link to='/teslaaccount' className={isMenuOpen && 'header__link--hidden'}>Tesla Account</Link>
        <div className="header__menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {
            isMenuOpen ? <CloseIcon /> : <MenuIcon />
          }
        </div>
      </div>
    </div>
     {isMenuOpen && <Menu />}
     <HeaderBlock/>
     
     
     </>
  )
}

export default Header
