import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motion'
import HeroSec from '../components/HeroSec'
import tempImg from "../assets/tempImg.jpg";
import realTimeImg from "../assets/realTimeImg.png";
import feedbackImg from "../assets/feedbackImg.png";
import connectionImg from "../assets/connectionImg.png";
import secureImg from "../assets/secureImg.png";
import founderImg from "../assets/founderImg.png";
import investorImg from "../assets/investorImg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const workingCards = [
        {
            img: { tempImg },
            step: 'Step 1',
            title: 'Upload Your Pitch',
            description: 'Share your startup deck, video, or idea with ease.',
        },
        {
            img: { tempImg },
            step: 'Step 2',
            title: 'Get Matched with Mentors and Investors',
            description: 'Receive feedback from those who matter most.',
        },
        {
            img: { tempImg },
            step: 'Step 3',
            title: 'Track Your Growth',
            description: 'Analyze views, responses, and engagement in one dashboard.',
        },
    ];

    const features = [
        {
            icon: realTimeImg,
            title: 'Real-Time Pitch Stats',
            description: 'Track views, comments, and ratings in one clean dashboard.',
        },
        {
            icon: feedbackImg,
            title: 'Expert Feedback',
            description: 'Investors & mentors share structured, actionable feedback.',
        },
        {
            icon: connectionImg,
            title: 'Direct Connections',
            description: 'Skip the noise. Get directly in front of those who can help.',
        },
        {
            icon: secureImg,
            title: 'Private and Secure',
            description: 'Your data are always protected.',
        },
    ];

    return (
        <div className='flex flex-col items-center justify-center'>
            <HeroSec />
            <div className='bg-cream-white w-full flex flex-col items-center py-[3rem] px-[3rem]'>
                <h2 className='font-Bold text-txt-black text-[2rem]'>How it works</h2>
                <div className='flex flex-col gap-[2rem] justify-center items-center mt-[1rem]'>
                    {workingCards.map((event, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            custom={index}
                            viewport={{ once: true }}
                            className='w-full flex flex-col mt-[1.5rem]'
                        >
                            <img src={tempImg} alt="step-3 img" className='w-[80%] rounded-3xl mb-[1rem]' />
                            <span className='font-Light text-[1.2rem] text-txt-gray-black'>{event.step}</span>
                            <h2 className='font-Bold text-[1.65rem] text-txt-black leading-[2rem] mt-[0.4rem]'>{event.title}</h2>
                            <span className='font-Medium text-txt-gray-black mt-[0.4rem]'>{event.description}</span>

                        </motion.div>
                    ))}
                </div>
            </div>
            <div className='bg-nav-white w-full flex flex-col items-center py-[3rem] px-[3rem]'>
                <h2 className='font-Bold text-txt-black text-[2rem]'>Why NextMove?</h2>
                <div className='flex flex-col gap-[2rem] mt-[4rem]'>
                    {features.map((event, index) => (
                        <div key={index} className='flex flex-col gap-[0.5rem] bg-cream-white py-[1.5rem] px-[1.2rem] rounded-3xl shadow-md'>
                            <img src={event.icon} className='w-[2rem]' />
                            <h2 className='font-Medium text-txt-black text-[1.2rem] mt-[0.5rem]'>{event.title}</h2>
                            <span className='font-Medium text-txt-gray-black text-[1rem]'>{event.description}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-cream-white w-full text-center flex flex-col items-center py-[3rem] px-[3rem]'>
                <h2 className='font-Bold text-txt-black text-[2rem]'>A Platform for Both Sides of the Table</h2>
                <button className='flex flex-col gap-[1.5rem] mt-[3rem] bg-cream-white px-[1.5rem] py-[1rem] border-border border-[2px] rounded-2xl cursor-pointer hover:border-txt-black focus:border-txt-black transition'>
                    <div className='flex justify-between items-center'>
                        <img src={founderImg} alt="founder-img" className='w-[3rem]' />
                    </div>
                    <div className='flex flex-col items-start gap-[0.5rem]'>
                        <h2 className='font-Bold text-txt-black text-[1.2rem]'>For Founders</h2>
                        <span className='font-Medium text-txt-gray-black text-left'>Raise visibility, validate your pitch, refine your product.</span>
                    </div>
                </button>
                <button className='flex flex-col gap-[1.5rem] mt-[3rem] bg-cream-white px-[1.5rem] py-[1rem] border-border border-[2px] rounded-2xl cursor-pointer hover:border-txt-black focus:border-txt-black transition'>
                    <div className='flex justify-between items-center'>
                        <img src={investorImg} alt="founder-img" className='w-[3rem]' />
                    </div>
                    <div className='flex flex-col items-start gap-[0.5rem]'>
                        <h2 className='font-Bold text-txt-black text-[1.2rem]'>For Investors</h2>
                        <span className='font-Medium text-txt-gray-black text-left'>Discover startups aligned with your values and interests.</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Home