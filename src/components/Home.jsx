import React from 'react'
import Saranya from "../assets/heroImage.png"
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'


import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >

       <div className="max-w-screen-lg mx-auto  flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
<div className="flex flex-col justify-center h-full">

<h3 className="text-4xl pt-20 sm:text-7xl font-bold text-white">
               Full Stack Developer
              </h3>
  <p className="text-gray-500 py-4 max-w-md">
  A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Express js and some other cool libraries and frameworks.
  </p>

  <div>
    <Link
      to="portfolio"
      smooth
      duration={500}
      className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
    >
    Portfolio
      <span className="group-hover:rotate-90 duration-300">
      <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
      </span>
      </Link>
  </div>


</div>

<div>
  <img src={Saranya} alt='my profile' 
   className="rounded-2xl mx-auto pl-20 w-3/6 md:w-full brightness-5 "/>
  </div>
    </div>
    </div>
  )
}

export default Home;