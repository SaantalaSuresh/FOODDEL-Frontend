import React, { useState } from 'react'
import './LoginpopUp.css'
import { assets } from '../../assets/frontend_assets/assets'

const LoginpopUp = ({setShowLogin}) => {
    const [currState,setCurrState] = useState('Sign Up')
  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className='login-popup-title'>
                <h2>
                    {currState}
                </h2>
                <img src={assets.cross_icon} alt="" onClick={()=>setShowLogin(false)}/>
            </div>
            <div className="login-popup-input">
                {currState == "Sign Up" && <input type="text" placeholder='Your name' required/>}
                
                <input type='email' placeholder='Your email' required />
                <input type="password" placeholder='password' required/>

            </div>
            <button>
                {currState === 'Sign Up' ? 'Create Account':"Login"}
            </button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>

            {currState === 'Sign Up' ? <p>Already have an account? <span onClick={()=>setCurrState('Login')}>Login here</span></p> : <p>Create a new account? <span onClick={()=>setCurrState('Sign Up')}>Click here</span></p>}
            
        
        </form>

    </div>
  )
}

export default LoginpopUp