import React from 'react'

const Settings = () => {
    const handlePitchSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='w-full flex flex-col h-[20rem] px-[2rem] py-[1rem]'>
            <div className='pb-[2rem] mt-[4.6rem] mini-desktop:ml-[20rem]'>
                <h1 className='font-Bold text-txt-black text-[1.6rem]'>Settings</h1>
                <form onSubmit={handlePitchSubmit} className='mt-[1.4rem] flex flex-col bg-cream-white border-dash-border border-[2px] px-[1.5rem] py-[1.5rem] rounded-lg gap-[1.5rem]'>
                    <h2 className='font-Medium text-txt-black text-[1.4rem]'>Reset Password</h2>
                    <div className='flex flex-col gap-[0.5rem]'>
                        <label className='font-Medium text-txt-black text-[1.2rem]'>Current Password</label>
                        <input type="password" placeholder='Enter your current password' className='w-full bg-nav-white text-txt-gray-black font-Regular rounded-lg px-[0.8rem] py-[0.4rem] border-border border-[2px]' />
                    </div>
                    <div className='flex flex-col gap-[0.5rem]'>
                        <label className='font-Medium text-txt-black text-[1.2rem]'>New Password</label>
                        <input type="password" placeholder='Enter a new password' className='w-full bg-nav-white text-txt-gray-black font-Regular rounded-lg px-[0.8rem] py-[0.4rem] border-border border-[2px]'/>
                    </div>
                    <div className='flex flex-col gap-[0.5rem]'>
                        <label className='font-Medium text-txt-black text-[1.2rem]'>Confirm Password</label>
                        <input type="password" placeholder='Confirm your new password' className='w-full bg-nav-white text-txt-gray-black font-Regular rounded-lg px-[0.8rem] py-[0.4rem] border-border border-[2px]' />
                    </div>
                    <button className='font-Regular text-nav-white bg-btn-blue py-[0.4rem] text-[1.1rem] rounded-lg cursor-pointer hover:bg-hover-blue transition-all'>
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Settings