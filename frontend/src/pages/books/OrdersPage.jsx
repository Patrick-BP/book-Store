import React from 'react'
import { useFetchOrdersByEmailQuery } from '../../redux/features/cart/ordersApi'
import { useAuth } from '../../context/AuthContext'
import { getImgUrl } from '../../utils/getImgUrl';

export default function OrdersPage() {
      const {currentUser} = useAuth();
    const {data: orders = [] , isLoading, isError} = useFetchOrdersByEmailQuery(currentUser.email);
    
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error...</div>

        // Function to format the date
        const formatDate = (isoTimestamp) => {
          const date = new Date(isoTimestamp); // Create a Date object
          const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
          const day = String(date.getDate()).padStart(2, "0");
          const year = date.getFullYear();
      
          return `${month} ${day} , ${year}`; // Return in MM DD YYYY format
        };
    
  return (

    <div class="container mx-auto px-4 py-8">
   
    <h1 class="text-3xl font-bold text-gray-800 mb-8">My Orders</h1>

    {
            orders.length === 0 ? <p>No orders found.</p> : (
           orders && orders.map(order => (
                            <div class="bg-slate-50 rounded-lg shadow-md p-6 mb-6">
                        
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h2 class="text-lg font-semibold text-gray-800">Order #{order._id}</h2>
                                <p class="text-sm text-gray-600">Placed on {formatDate(order.createdAt)}</p>
                            </div>
                            {/* <span class="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">
                                Delivered
                            </span> */}
                        </div>

                    
                        <div class="border-t border-b border-gray-200 py-4">

                        {order.productIds && order.productIds.map(item => (
                        
                            <div class="flex items-start gap-4 mb-4">
                                <div class="w-10 h-22 bg-gray-200 rounded-sm"><img src={getImgUrl(item.coverImage)}/></div>
                                <div class="flex-1">
                                    <h3 class="font-medium text-xs text-gray-800">{item.title}</h3>
                                    {/* <p class="text-sm text-gray-600">by Author Name</p> */}
                                    <p class="text-xs text-gray-600">Quantity: 1</p>
                                </div>
                                <div class="text-gray-800 ml-auto">${item.newPrice}</div>
                            </div>
                             ))}

                        
                        </div>

                
                        <div class="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div class="text-sm text-gray-600">
                                <p>Delivery Address:</p>
                                <p class="text-gray-800">{order.address.street +" "+ order.address.state +" "+ order.address.country +" "+ order.address.zipCode }</p>
                            </div>
                            <div class="text-right">
                                <p class="text-lg font-semibold text-gray-800">Total: ${order.totalPrice}</p>
                            </div>
                        </div>
                    </div>
            ))
        )
    }
    

   
</div>
  )
}
