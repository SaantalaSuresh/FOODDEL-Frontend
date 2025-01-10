import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" className="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel nobis? Dolor distinctio error repudiandae eum inventore, nemo qui ex nesciunt. Veritatis voluptate nobis accusantium maxime dolore corrupti quasi aperiam.</p>
                <div className='socil-media-icons'>
                <img src={assets.facebook_icon} alt="" className="" />
                <img src={assets.twitter_icon} alt=""/>
                <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>

                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9346120294</li>
                    <li>
                        saantalasuresh@gmail.com
                    </li>
                </ul>

            </div>
        </div>
        <hr/>
        <p className='footer-copy-right'>Copyright 2024 tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer