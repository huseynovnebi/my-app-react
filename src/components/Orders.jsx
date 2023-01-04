import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './Navbar'




const Orders = () => {
    const orders = useSelector((state) => state.counter.orders)
   
    
    return (
        <div className=''>
            <Navbar />
            <div className='max-w-[1640px] mx-auto relative p-4 flex justify-center items-center'>

                <table className='w-[100%] md:w-[70%] '>
                    <thead>
                        <th>Order Number</th>
                        <th>Delivery Adress</th>
                        <th>Full Name of buyer</th>
                        <th>Total Price</th>
                    </thead>


                    {orders.map((item, index) => (

                        <tbody className='text-center'>
                            <td>{item["id"]}</td>
                            <td>{item["adress"]}</td>
                            <td>{item["fullname"]}</td>
                            <td>{item["totalvalue"]}</td>
                           
                        </tbody>
                    ))
                    }
                </table>
               
            </div>
        </div>
    )
}

export default Orders