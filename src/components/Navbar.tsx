import React from 'react'
import Image from 'next/image'
const Navbar = (data:any) => {
    return (
  
      
         <div className= {'${data,font.className} links-parent'}>
          <div className='flex justify-between items-center'>
            <div className='text-xl font-large'>sidra wahid</div>
            
             <ul className="links">
                <li className= 'menulink'><a href='#Hero'>Home</a></li>
                <li className= 'menuLink'><a href='#About'>About</a></li>
                <li className= 'menuLink'><a href='#skills'>Skills</a></li>
                <li className= 'menuLink'><a href='#Contact'>Contact</a></li>
             </ul>
              
              </div>
           
            </div>
            
    )
}
export default Navbar
