import React, { useState } from 'react'
import { LuUpload } from "react-icons/lu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUserLarge } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import avatarImg from "../assets/avatarImg.png";
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex flex-col w-full items-center'>
            <div className='fixed flex gap-[1.2rem] items-center w-full top-0 py-[1rem] px-[1rem] z-100 bg-nav-white border-b-dash-border border-b-[2px]'>
                <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} className='text-txt-black p-[0.4rem] hover:bg-gray-200 rounded-lg cursor-pointer transition border-border border-[1px]' />
                <h1 className='font-Medium text-[1.3rem] text-txt-black select-none'>Welcome, Ratnesh!</h1>
            </div>
            {isOpen &&
                <div className={`fixed top-0 left-0 h-full border-r-dash-border border-r-[2px] bg-nav-white transition-all duration-300 ease-in-out ${isOpen ? 'w-[55%] opacity-100' : 'w-0 opacity-0'} overflow-hidden`}>
                    <div className='mt-[5.5rem] flex flex-col items-center justify-center border-b-dash-border border-b-[2px] pb-[1.2rem]'>
                        <div className='flex flex-col items-center justify-center'>
                            <img src={avatarImg} alt="avatar" className='w-[5rem] ' />
                        </div>
                        <div className='flex flex-col items-center mt-[1rem]'>
                            <h2 className='font-Medium text-txt-black text-[1.1rem]'>Ratnesh Chipre</h2>
                            <span className='font-Light text-txt-gray-black'>ratneshchipre@gmail.com</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[7rem] items-center px-[1rem] py-[1.3rem]'>
                        <div className='w-full'>
                            <ul className='font-Medium flex flex-col text-features gap-[0.4rem]'>
                                <li>
                                    <Link to='/user/founder/profile'>
                                        <button className='flex items-center w-full gap-[1.2rem] px-[1.5rem] py-[0.7rem] rounded-lg hover:bg-blue-50 hover:text-btn-blue cursor-pointer transition-all focus:bg-blue-50 focus:text-btn-blue'>
                                            <FontAwesomeIcon icon={faUserLarge} className='' />
                                            <span className='text-[1.1rem]'>Your Profile</span>
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/user/founder/create-pitch'>
                                        <button className='flex items-center w-full gap-[1.2rem] px-[1.5rem] py-[0.7rem] rounded-lg hover:bg-blue-50 hover:text-btn-blue cursor-pointer transition-all focus:bg-blue-50 focus:text-btn-blue'>
                                            <LuUpload />
                                            <span className='text-[1.1rem]'>Upload Pitch</span>
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <button className='flex items-center w-full gap-[1.2rem] px-[1.5rem] py-[0.7rem] rounded-lg hover:bg-blue-50 hover:text-btn-blue cursor-pointer transition-all focus:bg-blue-50 focus:text-btn-blue'>
                                        <FontAwesomeIcon icon={faChartLine} className='' />
                                        <span className='text-[1.1rem]'>Analytics</span>
                                    </button>
                                </li>
                                <li>
                                    <button className='flex items-center w-full gap-[1.2rem] px-[1.5rem] py-[0.7rem] rounded-lg hover:bg-blue-50 hover:text-btn-blue cursor-pointer transition-all focus:bg-blue-50 focus:text-btn-blue'>
                                        <FontAwesomeIcon icon={faComment} className='' />
                                        <span className='text-[1.1rem]'>Feedback</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className='w-full font-Medium flex flex-col text-features gap-[0.4rem]'>
                            <Link to='/user/founder/settings'>
                                <button className='flex items-center w-full gap-[1.2rem] px-[1.5rem] py-[0.7rem] rounded-lg hover:bg-blue-50 hover:text-btn-blue cursor-pointer transition-all focus:bg-blue-50 focus:text-btn-blue'>
                                    <FontAwesomeIcon icon={faGear} className='' />
                                    <span className='text-[1.1rem]'>Settings</span>
                                </button>
                            </Link>
                            <button className='flex items-center w-full gap-[1.2rem] px-[1.5rem] py-[0.7rem] rounded-lg hover:bg-red-100 hover:text-red-400 cursor-pointer transition-all focus:bg-red-100 focus:text-red-400'>
                                <FontAwesomeIcon icon={faArrowRightFromBracket} className='' />
                                <span className='text-[1.1rem]'>Log Out</span>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Dashboard