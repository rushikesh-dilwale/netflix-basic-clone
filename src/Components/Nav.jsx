import React from 'react'
import Logo from './Logo.png';

const Nav = () => {
  return (
    <div className='Nav'> 
        <img src={Logo} alt="Logo" />

    
            
                 <h4 >Home</h4> 
                 <h4 >Tv Shows</h4>
                  <h4 >Movies</h4>  
                  <h4>My List</h4>   
    
    </div>
  )
}

export default Nav