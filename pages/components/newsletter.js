'use client'

import { memo, useState } from "react"

const Newsletter = () => {

    const originalConsoleWarn = console.warn;
    console.warn = () => { };

    const [newsMail, setNewsMail] = useState('');

    const handleSignUp = () => {
        alert(`Thanks for signing up  We will be sending newsletters for ${newsMail}`)
    };
    const handleChange = (e) => setNewsMail(e.target.value)

    console.warn = originalConsoleWarn;



    return (
        <div className='newsletter h-fit flex flex-col gap-3 w-full '>
            <h1 className='font-medium text-sm mb-2 tracking-wide uppercase '>NewsLetter</h1>
            <p className='text-sm'>Sign up to receive 10% off and get the latest news and exclusive content.</p>
            <div className="emai-container w-full h-10 flex items-center justify-between gap-2">
                <input
                    type="email"
                    placeholder="Enter your email here"
                    className="w-full h-full bg-transparent border-b-2 border-[#706a66aa] px-5 focus:outline-0 placeholder:text-[#666666] text-black focus:border-[#706a66]"
                    onChange={handleChange}
                    value={newsMail}
                    name="mail"
                />
                <button className='uppercase h-full w-1/5 text-sm font-semibold border-b-2 border-[#706a66]'
                    onClick={handleSignUp}
                >Sign UP</button>
            </div>
        </div>
    )
}

export default memo(Newsletter)