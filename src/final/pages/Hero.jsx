import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero">
        <div className="left">
           <img src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg " alt=""  className='image'/>

        </div>
        <div className="right">
        <h1>Welcome All Tenants to  our Rental Platform</h1> 
        <br></br>
        <div className='t'>'''''''''''''''</div>
        <div><h3>Pay and Recieve your recit after payment</h3></div>
        <div className='t'>'''''''''''''''''''''''''''''''''''''dfghjfgyuhjgfghfghcvbtruhfjgghdffdghfghrtyutryut</div>
           


           <h5>enter your details here</h5>
        <NavLink className='btn' to='/login'>get started</NavLink>
            </div>
    </div>
  )
}

export default Hero