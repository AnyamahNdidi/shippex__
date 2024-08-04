import React from 'react'
import LoginForm from '../components/LoginForm';
import logo from "../assets/img_1.png"



const Login = () => {
  return (
      <div className="flex  flex-col   h-screen bg-[#FFFFFF]">
          <div className='pl-10 pt-8'>
                <img
                    className=" w-32"
                  src={logo}// Replace with your logo path
                    alt="Workflow"
                />
              
          </div>
            
            <div className='w-full  flex-1  flex justify-center items-center'>
                <div className="max-w-md    flex flex-col items-center justify-center w-full space-y-4">
                  <div className='flex flex-col items-center justify-center '>
                      <h2 className='font-bold text-2xl '>Sign in</h2>
                      <p className='text-[#4B5563]'>Don't have and account yet? <span className='text-secondary font-bold'>Sign up here</span></p>
                    </div>
                    <LoginForm  />
                </div>
            </div>

    </div>
  )
}

export default Login