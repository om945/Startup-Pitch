import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const HeroSec = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full px-[2rem] pt-[9rem] pb-[3rem]'>
            <div className='flex flex-col items-center gap-[1rem] text-center'>
                <h1 className='text-[2.5rem] text-txt-black text-center font-Bold leading-[3.5rem]'>Where <span className='bg-gradient-to-r from-[#1E40AF] to-[#0EA5E9] bg-clip-text text-transparent'>Bold Ideas</span> Meet the Right Eyes.</h1>
                <p className='text-txt-gray-black font-Regular w-[22rem] leading-[1.6rem]'>Bridging visionary founders with the investors who believe in them.</p>
                <button className='bg-btn-blue font-Medium text-nav-white py-[0.5rem] px-[1.5rem] rounded-3xl cursor-pointer hover:bg-hover-blue border-none outline-none transition'>
                    Get Started
                    <FontAwesomeIcon icon={faChevronRight} className='ml-[0.8rem]'/>
                </button>
            </div>
        </div>
    )
}

export default HeroSec