import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import getBaseUrl from '../utils/getBaseUrl';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function LoginAdmin() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    
    try {
    const response =  await axios.post(`${getBaseUrl()}/api/auth/login`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    const auth = response.data;
    if(auth.token) {
        localStorage.setItem('token', auth.token);
         Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: auth.message,
                            showConfirmButton: false,
                            timer: 1500
                          });

        navigate('/dashboard');
    }else {
        setMessage(auth.message);
    }
   
   
    } catch (error) {
      setMessage(error);  
    }
  }

  return (
    <div className='h-[calc(100vh-120px)]  flex justify-center items-center'>
      <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className="block text-sm  mb-2 text-gray-700 font-bold" htmlFor="username">
              Username
            </label>
            <input
              {...register("username", {required: true})}
              className="shadow bolder rounded w-full py-2 px-3  focus:outline-none focus:shadow leading-tight "
              id="username"
              type="text"
              placeholder="admin"
            />
          </div>
          <div className='mb-4'>
            <label className="block text-sm  mb-2 text-gray-700 font-bold" htmlFor="password">
              Password
            </label>
            <input
            {...register("password", {required: true})}
              className="shadow bolder rounded w-full py-2 px-3  focus:outline-none focus:shadow leading-tight "
              id="password"
              type="password"
              placeholder="******"
            />
          </div>
          {
            message && (
              <div className="text-red-500 text-xs italic mb-3">{message}</div>
            )
          }
          
            <button
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </form>
          <div>
            
            <p className='mt-5 text-center text-gray-500 text-xs'>@2025 Book Store. All rights reserved. </p>
          </div>
        

      </div>
    </div>
  )
}
