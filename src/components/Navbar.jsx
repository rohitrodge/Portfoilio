import React, { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import logo from '../assests/projects/logo.jpg';
import { Link } from 'react-scroll';


const Navbar = () => {
const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav);


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
       <div>
           <img src= {logo} alt='logo' style={{width:'60px'}}/> 
       </div>

       {/*Navbar Menu */}
       <div >
        <ul className='hidden md:flex space-x-4 '  > 
            <li>
            <Link  to="home"  smooth={true}  duration={500} className='nav-link' >
                Home
            </Link>
            </li>
            <li>
                <Link  to="about"  smooth={true}  duration={500} className='nav-link' >
                About
            </Link>
            </li>
            <li>
               <Link  to="skills"  smooth={true}  duration={500} className='nav-link' >
                   Skills
               </Link>
            </li>
            <li>
                <Link  to="work"  smooth={true}  duration={500} className='nav-link' >
                Work
                </Link>
            </li>
            <li>
                <Link  to="contact"  smooth={true}  duration={500} className='nav-link' >
                Contact
                </Link>
                </li>
        </ul>
       </div>

       {/* hamburger */}
    <div onClick={handleClick} className='md:hidden z-10'> 
       {!nav ? <FaBars /> : <FaTimes />}
    </div>

    {/* Mobile Menu */}

        <ul className = {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}> 
            <li className='py-6 text-3xl' >
                <Link onClick={handleClick} to="home"  smooth={true}  duration={500} >
                   Home
               </Link>
            </li>

            <li className='py-6 text-3xl'>
                <Link onClick={handleClick} to="about"  smooth={true}  duration={500} >
                    About
                </Link>
            </li>

            <li className='py-6 text-3xl'>
                <Link onClick={handleClick} to="skills"  smooth={true}  duration={500} >
                   Skills
               </Link>
            </li>

            <li className='py-6 text-3xl'>
                <Link onClick={handleClick} to="work"  smooth={true}  duration={500} >
                    Work
                </Link>
            </li>

            <li className='py-6 text-3xl'>
                 <Link onClick={handleClick} to="contact"  smooth={true}  duration={500} >
                    Contact
                </Link>    
            </li>
        </ul>
   

    {/* Social icon*/}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-blue-900'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/rohit-rodge-373077214/'>
                    Linkedin <FaLinkedin  size={30}/>
                </a>
            </li>

            <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='https://github.com/rohitrodge'>
                    Github <FaGithub  size={30}/>
                </a>
            </li>

            <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#6fc2b0]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='https://webrohit27@gmail.com'>
                    Email <HiOutlineMail  size={30}/>
                </a>
            </li>

            <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='https://drive.google.com/file/d/1NQcy1wZqHbwDdk0BvU9ixVgLB44J6NzB/view?usp=drive_link'>
                    Resume <BsFillPersonLinesFill  size={30}/>
                </a>
            </li>

        </ul>
    </div>
    
    
    
    </div>
  )
}

export default Navbar