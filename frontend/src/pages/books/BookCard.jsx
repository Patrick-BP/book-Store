import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from'react-redux';
import { addToCart } from '../../redux/features/cart/CartSlice';

export default function BookCard({data}) {
    const  dispatch = useDispatch();

    const handleAddToCart = (book) => {
        dispatch(addToCart(book));  
    };

    return (
        
            <div className=" rounded-lg transition-shadow duration-300">
                <div
                    className="flex flex-col sm:flex-row sm:items-center sm:h-85  sm:justify-center gap-4"
                >
                    <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
                        <Link to={`/book/${data._id}`}>
                            <img
                                src={getImgUrl(data.coverImage) }
                                alt=""
                                className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                            />
                        </Link>
                    </div>

                    <div>
                        <a href={`/book/${data._id}`}
                        ><h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                                {data.title}
                            </h3></a>
                        <p className="text-gray-600 mb-5">{data.description.length > 80 ? `${data.description.slice(0, 80)} ...` : `${data.description}`}</p>
                        <p className="font-medium mb-5">
                           ${data.newPrice} <span className="line-through font-normal ml-2">${data.oldPrice}</span>
                        </p>
                        <button onClick={()=>handleAddToCart(data)} className="btn-primary md:px-0 px-6 space-x-1 flex items-center gap-1  ">
                            <FiShoppingCart className="" />
                            <span className='md:text-xs'>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>


      
    )
}
