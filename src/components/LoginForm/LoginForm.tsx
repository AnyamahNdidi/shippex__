import React, { useState } from 'react'
import { FiUsers } from "react-icons/fi";
import { GoLock } from "react-icons/go";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import login from "../../services/api"
import Spinner from "../Spinner"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../services/ReduxState"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }).min(1, { message: 'Required' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () =>
{
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);
  
  

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const dispatch = useDispatch();
	const navigate = useNavigate();

  // Handle form submission
  const onSubmit = async (data: FormData) => {
      try {
        setLoading(true);
        const result = await login(data.email, data.password);
        setLoading(false);
        
        if (result.success) {
          toast.success('Login successful!');
          navigate("/shipmentTrack");
          dispatch(addUser({
            full_name: result?.data?.full_name,
            message: result?.data?.message,
            home_page: result.data.home_page
          }));
        } else {
          toast.error(`Login failed maybe wrong credential : ${result.error}`);
        }
      } catch (error) {
        toast.error('Network error or server issue');
      }
    };



  const handleRememberMe = () =>
  {
    setRememberMe(!rememberMe);
  };
//      const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//   };

    return (
      <div>
        <div className="w-80">
           <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        <form onSubmit={handleSubmit(onSubmit)}>
                    
        <div className="flex BG flex-col mb-6">
          <label htmlFor="email" className="mb-1 font-bold text-xs sm:text-sm tracking-wide text-gray-600">Username</label>
           <div className ="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <FiUsers/>
            </div>

                <input id="email" type="email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" {...register('email')} />
              </div>
                 {errors.email && <p className="text-red-600">{errors.email.message}</p>}
              
        </div>
                    
        <div className="flex items-center mb-2 -mt-4">
          <label htmlFor="password" className="mb-1 font-bold text-xs sm:text-sm tracking-wide text-gray-600">Password</label>
          <div className="flex ml-auto">
            <a href="#" className="inline-flex text-xs sm:text-sm text-secondary hover:text-blue-700">Forgot Your Password?</a>
          </div>
        </div>
        <div className="flex flex-col mb-6">
          
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <GoLock />
            </div>

                 <input
                                id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="your password"
              value={password}
              {...register('password')}
              onChange={(e) => setPassword(e.target.value)}className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"  />
              <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
               >
                  {showPassword ? (<FaRegEyeSlash />) : (<IoEyeOutline />)}
                 
            </button>       
              </div>
               {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    </div>

                    <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMe}
            className="mr-2 form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
          />
          <label className="text-gray-700 font-medium" htmlFor="remember-me">
            Remember me
          </label>
        </div>
                    
                  

        

        <div className="flex w-full">
              <button  disabled={!rememberMe || loading} type="submit"
                 className={`flex items-center justify-center focus:outline-none text-sm sm:text-base rounded py-2 w-full transition duration-150 ease-in ${
                rememberMe ? 'bg-[#2563EB] hover:bg-blue-700 text-white' : 'bg-blue-400 text-gray-500 cursor-not-allowed'
              }`}
              >
                {loading ? <Spinner /> : null}
                <span className="mr-2">Sign in</span>
          
          </button>
        </div>
      </form>
    </div>
    
     </div>       
  )
}

export default LoginForm