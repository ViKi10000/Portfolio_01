import React, { useState } from 'react'

import {FaBars,FaTimes} from "react-icons/fa"
import { Link } from 'react-scroll';


function Navbar() {

const[nav,setNav]=useState(false);

function handleClick() {
    setNav(prevState => !prevState)
  }

    const links=[
        {
            id:1,
            link:'Home',
           src:"home"
        },
        {
            id:2,
            link:'About',
            src:"about"
            
        },
        {
            id:3,
            link:'Portfolio',
            src:"portfolio"
            
        }, {
            id:4,
            link:'Contact',
            src:"contact"
            
        },
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-6 text-white bg-black fixed'>
       
        <div>
            <h1 className='text-5xl font-signature ml-2 '>viki</h1>
        </div>


        <ul className='hidden md:flex'>
        {links.map(({ id,link,src})=>(
           
    <li  key={id}  className='px-4 cursor-pointer capitalize font-medium text-grey-500 hover:scale-110 duration-200' >
       <Link  smooth={true} duration={500} to={src}>
                 {link}
                 </Link>
                 </li>
                
            ))}
        </ul>


        <div  onClick={handleClick} className='cursor-pointer pr-4 z-10 text-grey-500 md:hidden ' >
           {nav ? <FaTimes size={30}/> :  <FaBars size={30}/>}
        </div>


        {nav && (
             <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-grey-500'>

             {links.map(({ id, link,src})=>(
     <li  key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl' >

        <Link onClick={handleClick} smooth={true} duration={500} to={src}>
          {link}
          </Link>

          </li>
     ))} 
             </ul>
        )}

       
    </div>
  )
}

export default Navbar;