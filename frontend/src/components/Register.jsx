import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
export default function Register() {
     const [message, setMessage] = useState("Please enter valid email and password")
       const {
         register,
         handleSubmit,
         watch,
         formState: { errors },
       } = useForm()
     
       const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <div className='h-[calc(100vh-120px)]  flex justify-center items-center'>
    <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <h2 className="text-xl font-semibold mb-4">Register Here</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label className="block text-sm  mb-2 text-gray-700 font-bold" htmlFor="email">
            Email
          </label>
          <input
             {...register("email", {required: true})}
            className="shadow bolder rounded w-full py-2 px-3  focus:outline-none focus:shadow leading-tight "
            id="email"
            type="email"
            placeholder="jane.doe@sample.com"
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
        <div>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        
          <p className="mt-2 text-sm text-gray-600">
            Already have an account? <Link className="text-blue-500 hover:text-blue-700" to="/login">Login</Link>
          </p>
          <div className='mt-4'>
            <button className='w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
              <FaGoogle className="mr-2" />
              Login with Google
            </button>
          </div>
          <p className='mt-5 text-center text-gray-500 text-xs'>@2025 Book Store. All rights reserved. </p>
        </div>
      </form>

    </div>
  </div>
  )
}
