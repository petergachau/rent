import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
const Navbar = () => {
  const [show, setShow] = useState(true)
  const activeNav=()=>{
    setShow(!show)
  }
  return (
    <nav className='navbar'>
      <div className='show'>
       <div className= {show ? 'heder':'nav-header'}>
      <div className='icons' onClick={activeNav}>
      {show  ?(<GiHamburgerMenu style={{color:'whitesmoke', cursor:'pointer'}}/>) : <ImCross style={{color:'whitesmoke' , cursor:'pointer'}}/>}
        
        
      </div>
        <nav>
          <ul className={show ? "ul-items": 'nav-items'}>
            <li className='li'><NavLink className='li' to='/'>Home</NavLink></li>
           <li className='li'><NavLink className='li' to='/about'>About Us</NavLink></li> 
           <li className='li'><NavLink className='li' to='/products'>House pricing</NavLink></li> 

           <li className='li'><NavLink className='li' to='/login'>get started</NavLink></li> 

          </ul>
        </nav>
      </div>
      </div>
      <div className='left'>
     
       
        rental
      </div>
      <div className='right'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About us
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        House pricing
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        get started
      </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
