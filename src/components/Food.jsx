import React, { useState } from 'react'
import { data } from "../data/data.js"
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux'
import { pushproduct,addtotal } from '../reducers/counterSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Food = () => {
    const [foods, setfoods] = useState(data);
    const count = useSelector((state) => state.counter.value)
    const notify = () => toast("Wow so easy! Item added to Cart!");
const dispatch = useDispatch();
    const filterType = (category) => {
        setfoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }

    const filterPrice = (price) => {
        setfoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }

    const filterSearch = (srci) =>{
        setfoods(
        data.filter((item)=>{
            return item.name.toLowerCase().includes(srci);
        }))
    }

    function myFunction(id,price){
        dispatch(pushproduct(id))
        dispatch(addtotal(price))
        notify();
    }
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center mb-7'>Top Rated Menu Items</h1>
            {/*Filter Row*/}
            <div className='flex flex-col lg:flex-row lg:justify-between'>
                {/*Filter Type*/}
                <div>
                    <p className={count ? "font-bold text-gray-300" : "font-bold text-gray-700"}>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => setfoods(data)}>All</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterType("burger")}>Burgers</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterType("pizza")}>Pizza</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterType("salad")}>Salads</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterType("chicken")}>Chickens</button>
                    </div>
                </div>
                {/*Search Input*/}
                <div className='bg-gray-200 flex rounded-xl items-center px-2 w-[200px] sm:w-[300px] lg:w-[400px]'>
                    <AiOutlineSearch size={25} className="text-orange-600" />
                    <input type="text" className='bg-transparent p-2 focus:outline-none w-full' placeholder='Search foods' onChange={(e)=>filterSearch(e.target.value)} />
                </div>
                {/*Filter Price*/}
                <div>
                    <p className={count ? "font-bold text-gray-300" : "font-bold text-gray-700"}>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterPrice('$')}>$</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterPrice('$$')}>$$</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterPrice('$$$')}>$$$</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterPrice('$$$$')}>$$$$</button>
                    </div>
                </div>
            </div>
            {/*Display foods*/}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div key={index} className="border shadow-lg hover:scale-105 duration-300 rounded-lg cursor-pointer">
                        <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg" />
                        <div className='flex justify-between items-center px-2 py-4'>
                            <p className={count ? "text-white font-bold":"text-black font-bold"}>{item.name}</p>
                            <p><span className='bg-orange-500 p-1 text-white rounded-lg'>{item.price}</span></p>
                        </div>
                        <div className='px-2 py-4'>
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white w-[130px] h-[40px] px-1 py-1 'onClick={() => {
          myFunction(item.id,item.price)
        }}>Add to Cart</button>
                        </div>
                        
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
       
    )
}

export default Food