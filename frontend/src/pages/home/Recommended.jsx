import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {useFetchAllBooksQuery} from '../../redux/features/cart/booksApi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import BookCard from '../books/BookCard';

export default function Recommended() {
   const {data:books = []} = useFetchAllBooksQuery();
      
    
  return (
    <div className='py-16'>
    <h2 className='text-3xl font-semibold mb-6'>Recommended for you</h2>
   

    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    navigation={true}
    breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  > 
  {books.length > 0 ? books.slice(5,10).map(book => (
     <SwiperSlide key={book._id}>
         <BookCard  data={book}/> 
     </SwiperSlide>
    )):<div><img src='./src/assets/icons8-spinner.gif'/></div>}
   
   
    
  </Swiper>
     
           
        
    
</div>
  )
}
