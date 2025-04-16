import React from 'react'
import { Link } from 'react-router-dom'
import headLogo from "../assets/headLogo(black).png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className='flex justify-center items-center'>
            <div className='fixed flex justify-between items-center w-full top-0 py-[0.8rem] px-[1.5rem] z-50 backdrop-blur-sm bg-nav-white/70'>
                <Link to='/' className='font-Medium'>
                    <div className='flex items-center'>
                        <h1 className='text-txt-black text-[1.4rem]'>NextMove</h1>
                        <img src={headLogo} alt="logo" className='h-[4rem] ml-[-0.5rem]' />
                    </div>
                </Link>
                <div className='flex gap-[0.8rem] items-center'>
                    <Link to='/account/login' className='flex items-center font-Regular text-[1rem]'>
                        <button className='cursor-pointer'>
                            <h3 className='text-txt-gray-black hover:text-txt-black'>LogIn</h3>
                        </button>
                    </Link>
                    <Link to='/account/signup' className='flex items-center font-Regular text-[1rem]'>
                        <button className='bg-btn-blue hover:bg-hover-blue py-[0.3rem] px-[0.8rem] rounded-3xl cursor-pointer transition'>
                            <h3 className='text-nav-white'>Sign Up</h3>
                        </button>
                    </Link>
                    <button className='text-[1.3rem] ml-[0.8rem] cursor-pointer'>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar