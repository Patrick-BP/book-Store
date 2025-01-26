import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useParams } from 'react-router-dom';
import { useFetchBookByIdQuery } from '../../redux/features/cart/booksApi';
import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/CartSlice';

export default function SingleBook() {
    const {id} =  useParams();
    const {data:book, isLoading, isError} = useFetchBookByIdQuery(id);

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error...</div>
    
    
    const  dispatch = useDispatch();

    const handleAddToCart = (book) => {
        dispatch(addToCart(book));  
    };
  return (
    <div className=" rounded-lg transition-shadow duration-300">
  <div
    className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
    <div className="sm:h-72 sm:flex-shrink-0 border rounded-md md:w-96">
      <a href="/">
        <img
          src={getImgUrl(book?.coverImage)}
          alt=""
          className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
        />
      </a>
    </div>

    <div className='flex flex-col justify-between  h-full gap-4'>

        <div className=''> 
            <div>
                    <a href="/"><h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                    {book?.title}
                    </h3></a>
                    <p className="text-gray-600 mb-5">{book?.description}</p>

            </div>
            <div>
                    <p className="font-medium mb-5">
                    ${book?.newPrice}<span className="line-through font-normal ml-2">${book?.oldPrice}</span>
                    </p>
                    <button onClick={()=>handleAddToCart(book)}  className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
                        <FiShoppingCart className="" />
                        <span>Add to Cart</span>
                    </button>

            </div>
        </div>
      

      
    </div>
  </div>
    </div>
  )
}
