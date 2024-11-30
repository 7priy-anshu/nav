import React from 'react';
import './Navbar.css';
import logo_light from '../../assets/logo-black.png';
import logo_dark from '../../assets/logo-white.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_black from '../../assets/search-b.png';
import toogle_light from '../../assets/night.png';
import toogle_dark from '../../assets/day.png';





const Navbar = ({theme, setTheme}) => {

  const toggle_mode = () =>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className='navbar'>
       <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo' />
       <ul>
       <li>home</li>
       <li>product</li>
       <li>feature</li>
       <li>about</li>
       </ul>

       <div className='searchbox'>
        <input type="text " placeholder='search' />
        <img src={theme == 'light' ? search_icon_light : search_icon_black} alt="" />
       </div>

  <img  onClick={()=>{toggle_mode()}}  src={theme == 'light' ?  toogle_light : toogle_dark} alt="" className='toogle-icon' />

    </div>
  )
}

export default Navbar