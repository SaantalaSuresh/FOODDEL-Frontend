import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { assets } from '../../assets/frontend_assets/assets'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'


const Navbar = ({setShowLogin}) => {

  const [menu,setmenu] = useState('home')
  const cartItems = useSelector(state=>state.CartItems)
  
  return (
    <div className='navbar'>
     <Link to="/" > <img src={assets.logo} alt="logo" className="logo" /></Link>
      <ul className='navbar-menu'>
        <Link to="/" className={menu === 'home' ? 'active':''} onClick={()=>setmenu('home')}>home</Link>
        <a href='#explore-menu' className={menu === 'menu' ? 'active':''} onClick={()=>setmenu('menu')}>menu</a>
        <a href='#mobile-app' className={menu === 'mobile' ? 'active':''} onClick={()=>setmenu('mobile')}>mobile-app</a>
        <a href='#footer' className={menu === 'contact' ? 'active':''} onClick={()=>setmenu('contact')}>contact us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt=""/>
        <div className='dot-container'>
          <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>
          {cartItems.length!==0 && <div className='dot'>

</div>}
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>

      </div>
    </div>
  )
}

export default Navbar