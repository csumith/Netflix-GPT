import React from 'react'
import Header from './Header'
import { useState } from 'react'
const Login = () => {
    const [isSignup,setisSignup] = useState(true)

    const togglefunction = ()=>{
        setisSignup(!isSignup)
    }
  return (
    <div>
        <Header/>
        <div className='absolute '>
            <img
            alt='img_not_found'
            src= "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            />
        </div>
        <form className='w-3/12 absolute my-40 m-auto left-0 right-0  p-12 bg-black bg-opacity-80 '>
            <h1 
            className='font-bold text-3xl text-white p-2 my-2 '>
            {isSignup ? "SignIn":"SignUp"}
             </h1>
            
            { !isSignup && <input 
            type='text' 
            placeholder='Full Name' 
            className='p-4 my-4 text-white  m-auto left-0 right-0 w-full bg-gray-700'>
            </input>}
            <input 
            type='text' 
            placeholder='Email' 
            className='p-4 my-4 text-white  m-auto left-0 right-0 w-full bg-gray-700'>
            </input>

            <input 
            type='password' 
            placeholder='Password' 
            className='p-4 my-4 text-white m-auto left-0 right-0 w-full  bg-gray-700'>
            </input>

            <button 
            className='p-4 my-6 text-white bg-red-700 w-full rounded-lg'>
                {isSignup ? "SignIn":"SignUp"}
            </button>

            <p className='p-4 text-white cursor-pointer' 
            onClick={togglefunction}>
            {isSignup ? 
            "New to netflix? Sign Up Now":
            "Registered User Sign In now"}
            </p>

        </form>
    </div>
  )
}

export default Login