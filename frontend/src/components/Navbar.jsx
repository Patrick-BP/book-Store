import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";

import avatarImg from "../assets/avatar.png";
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';




const navigation = [
    {name: "Dashboard", href: "/"},
    {name: "Orders", href: "/orders"},
    {name: "Cart", href: "/cart"},
    {name: "Check Out", href: "/checkout"},
    
]

const Navbar = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems)
    const {currentUser, logout} = useAuth();

 const handleLogout = async () => {
    await logout();
    setIsDropdownOpen(false);
    navigate("/login");
}

  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
            <div className='flex items-center md:gap-16 gap-4'>
                    <Link   to=''><FaBars className='size-6' /></Link>
                <div className=' relative sm:w-72 w-40 space-x-2'>
                    <IoSearchOutline className='absolute inline-block left-3 inset-y-2'/>
                    <input type='text' placeholder='Search here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none' />
                    
                </div>
            </div>

            <div className='relative flex items-center md:space-x-3 space-x-2'>
                <div>
                    {currentUser? <>
                    <button onClick={()=>setIsDropdownOpen(!isDropdownOpen)}>
                        <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500': '' }`}/>
                    </button>
                    {isDropdownOpen && (
                        <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                            <ul className='py-2'>
                                {navigation.map((item)=>{
                                     return <li key={item.name} onClick={()=> isDropdownOpen(false)}>
                                                <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>{item.name}</Link>
                                            </li>
                                })}
                                <li onClick={handleLogout} className='block px-4 py-2 text-sm hover:bg-gray-100'>Logout</li>
                            </ul>
                        </div>
                    )
                    
                    }
                    
                    </>: <Link to='/login'><FaRegUser className='size-6'/></Link>}
                </div>
                
                <button className='hidden sm:block'>
                <FaRegHeart className='size-6'/>
                </button>
                <Link to='/cart' className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'>
                    <RiShoppingCart2Line className='size-6'/>
                    <span className='text-sm font-secondary sm:ml-1'>{cartItems.length}</span>
                </Link>
                
            </div>
        </nav>

    </header>
  )
}

export default Navbar
