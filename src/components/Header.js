
import React from 'react'

const Header=()=>{
  return(
    <nav>
    <ul className='header'>
        <li><a onClick={()=>{
            document.getElementById('section1').scrollIntoView({behavior:'smooth'})
        }}>Banner</a></li>
        <li><a onClick={()=>{
            document.getElementById('section2').scrollIntoView({behavior:'smooth'})
        }}>About</a></li>
      </ul>
  </nav>
  )
}

export default Header;