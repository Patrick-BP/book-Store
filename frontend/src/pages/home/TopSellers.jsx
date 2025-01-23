import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import BookCard from '../books/BookCard';

export default function TopSellers() {
     const[books, setBooks] = useState([]);
     const categories = ["Choose a genre", "Business","marketing", "seo", "branding", "pricing", "content creation"  ]
     const [filter, setFilter] = useState(books);
     useEffect(() =>{
        fetch("books.json")
       .then(res => res.json())
       .then(data => {
        setBooks(data)
        setFilter(data)
    });
     },[])

     const handleFilterChange = (e) => {
        
        if(e.target.value === "Choose a genre") return setFilter([...books]);
        setFilter(books.filter(book => book.category.toLowerCase() === e.target.value.toLowerCase()));
     }


    
  return (
    <div className='py-10'>
        <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
        <div className='mb-8  items-center'>
            <select className='border bg-[#EAEAEA]' onChange={handleFilterChange }>
                {categories.map(category => <option key={category} value={category}>{category}</option>)}
            </select>


        </div>

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
      {filter.length > 0 ? filter.map(book => (
         <SwiperSlide key={book._id}>
             <BookCard  data={book}/> 
         </SwiperSlide>
        )):<div><img src='./src/assets/icons8-spinner.gif'/></div>}
       
       
        
      </Swiper>
         
               
            
        
    </div>
  )
}
