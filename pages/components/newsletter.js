'use client'

import { memo, useState } from "react"

const Newsletter = () => {

    const originalConsoleWarn = console.warn;
    console.warn = () => { };

    const [newsMail, setNewsMail] = useState('');

    const handleSignUp = () => {
        if (isValidEmail(newsMail)) {
            alert(`Thanks for signing up  We will be sending newsletters for ${newsMail}`)
        } else {
            alert("Please enter a proper mail")
        }
    };

    //testing the regex of the email entered
    function isValidEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    const handleChange = (e) => setNewsMail(e.target.value)

    console.warn = originalConsoleWarn;



    return (
        <div className='newsletter h-fit flex flex-col gap-3 w-full my-10'>
            <h1 className='font-medium text-sm mb-2 tracking-wide uppercase '>NewsLetter</h1>
            <p className='text-sm'>Sign up to receive 10% off and get the latest news and exclusive content.</p>
            <div className="emai-container w-full h-10 flex lg:flex-row md:flex-row flex-col items-start lg:items-center md:items-center justify-between gap-2">
                <input
                    type="email"
                    placeholder="Enter your email here"
                    className={`w-full shrink-0 h-full bg-transparent border-b-2 focus:border-b-4 border-[#706a66aa] px-5 focus:outline-0 placeholder:text-[#666666] text-black ${isValidEmail(newsMail) ? 'focus:border-green-500' : 'focus:border-blue-400'}`}
                    onChange={handleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    value={newsMail}
                    name="mail"
                />
                <button className='uppercase shrink-0 h-full w-1/5 text-sm font-semibold border-b-2 border-[#706a66]'
                    onClick={handleSignUp}
                >Sign UP</button>
            </div>
        </div>
    )
}

export default memo(Newsletter)