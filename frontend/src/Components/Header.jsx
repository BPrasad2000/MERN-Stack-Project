import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


function Header() {
  let Links =[{
    name:"Home",
    link:"/"
},
{
    name:"About",
    link:"/about"
},
{
    name:"Policy",
    link:"/policy"
},
{
    name:"Contact",
    link:"/contact"
},
{
    name:"Login",
    link:"/login"
},
{
    name:"Register",
    link:"/register"
}
];

const [open, setOpen] = useState(false);

  return (
    <>
    <div className='shadow-md w-full fixed top-0 left-0 '>
        <div className='md:flex bg-white items-center justify-between py-4 md:px-10 px-7 '>
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                <span className='text-3xl text-indigo-600 mr-1 py-1'>
                <i className="fa-solid fa-cloud"></i>
                </span>
                MyWebsite
            </div>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <i className={open? 'fa-solid fa-xmark':'fa-solid fa-bars'}></i>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                {Links.map((link) => (
                    <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                        <NavLink to={link.link} className='text-gray-800 hover:text-indigo-600 duration-500'>{link.name}</NavLink>
                    </li>

                )
                )}
     
            </ul>
        </div>
           
    </div>
    </>
  )
}

export default Header