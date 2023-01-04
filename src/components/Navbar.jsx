import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp, MdDarkMode } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux'
import { darkon, pushproduct, addtotal, minustotal, minustotal2,orderdone } from '../reducers/counterSlice'
import { data } from "../data/data.js"
import { Link } from "react-router-dom";
import swal from 'sweetalert';


const Navbar = () => {
    
    const [nav, setnav] = useState(false);
    const [cart, setcart] = useState(false);
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    const cartpros = useSelector((state) => state.counter.cart)
    const totalprice = useSelector((state) => state.counter.totalvalue)
    const pros = useSelector((state) => state.counter.pros)

    function myFunction1(id, price) {
        dispatch(pushproduct(id))
        dispatch(addtotal(price))

    }
    function myFunction2(id, price) {
        dispatch(minustotal(id))
        dispatch(minustotal2(price))

    }
    function myFunction3(){
        const arr = [];
        const adress = document.getElementById("adress").value;
        const fullname = document.getElementById("fullname").value;
        arr.push(adress);arr.push(fullname);
        dispatch(orderdone(arr));
        swal("Yeah! You just ordered!", "It will be delivered on 30minits!", "success");
    }
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/*Left Side*/}
            <div className='flex items-center'>
                <div className='cursor-pointer' onClick={() => setnav(!nav)}>
                    <AiOutlineMenu size={30} className={count ? "text-white" : "text-black"} />
                </div>
                <Link to="/"><h1 className={count ? "text-2xl sm:text-3xl lg:text-4xl px-2 text-white" : "text-2xl sm:text-3xl lg:text-4xl px-2"}>Best <span className='font-bold'>Eats</span></h1></Link>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2 cursor-pointer'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>
            {/*Search Input*/}


            {/*Cart Button*/}
            <div className='flex items-center gap-3 justify-center'>
                <MdDarkMode size={25} onClick={() => {
                    dispatch(darkon())
                }} className={count ? "text-white cursor-pointer " : "text-black cursor-pointer "} />
                <button className={count ? "bg-black text-white  flex items-center py-2 rounded-full border-2 border-white" : "bg-black text-white flex items-center py-2 rounded-full"} onClick={() => setcart(!cart)}>
                    <BsFillCartFill className='mr-2' /> Cart
                </button>
            </div>

            {cart ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
            </div> : ""}
            <div className={cart ? 'fixed overflow-y-scroll overflow-x-hidden top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300' :
                'fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className="absolute right-4 top-4 cursor-pointer" onClick={() => setcart(!cart)} />
                <h2 className='text-2xl p-4'>Cart <span className='font-bold'>Products</span></h2>
                {data.filter(item => cartpros.includes(item.id)).map((item, index) => (
                    <div className='w-full flex flex-col' key={index}>
                        <div className='flex flex-row gap-2 mb-4 pl-2'>
                            <img src={item.image} alt={item.name} className="w-[100px] h-[100px] object-cover rounded-t-lg" />
                            <div className='flex flex-col gap-1'>
                                <p>{item.name}</p>
                                <div className='flex items-center gap-1'>
                                    <button className='bg-white text-orange-600 border-2 border-black text-2xl px-2 py-0' onClick={() => myFunction1(item.id, item.price)}>+</button>
                                    <p>{pros[`${item.id}`]}</p>
                                    <button className='bg-white text-orange-600 border-2 border-black text-2xl px-2 py-0' onClick={() => myFunction2(item.id, item.price)}>-</button>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
                <p className='text-xl text-center pb-5 underline'>Total Price: <span className='font-bold text-orange-500'>{totalprice}</span> dollars</p>
                <div className='flex flex-col w-full justify-center items-center gap-3 pb-4'>
                    <input type="text" id='fullname' className='bg-transparent p-2 text-black focus:outline-none w-[80%] border-2  border-black  placeholder-orange-500 rounded' placeholder='Full name of buyer...' />
                    <input type="text" id='adress' className='bg-transparent p-2 focus:outline-none  w-[80%] border-2 border-black  placeholder-orange-500 rounded' placeholder='Delivery Adress...' />
                    <textarea name="" id="" cols="30" rows="3" placeholder='Note...' className='bg-transparent p-2 focus:outline-none w-[80%] border-2 border-black placeholder-orange-500 rounded'></textarea>
                    <button className='hover:bg-black hover:text-white border-2' onClick={()=>myFunction3()}>Order it</button>
                </div>
            </div>
            {/*Mobile menu*/}
            {/*Overlay*/}
            {nav ? <div className='bg-black/80 fixed  w-full h-screen z-10 top-0 left-0'>
            </div> : ""}

            {/*Side drawer menu*/}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' :
                'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className="absolute right-4 top-4 cursor-pointer" onClick={() => setnav(!nav)} />
                <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                     
                        <li className='text-xl py-4 cursor-pointer'><Link to="/orders" className='flex items-center'><TbTruckDelivery size={25} className="mr-4" /><span>Orders</span></Link></li>
                        <li className='text-xl py-4 flex items-center'><MdFavorite size={25} className="mr-4" />Favorites</li>
                        <li className='text-xl py-4 flex items-center'><FaWallet size={25} className="mr-4" />Wallet</li>
                        <li className='text-xl py-4 cursor-pointer'><Link to="/about" className='flex items-center'><MdHelp size={25} className="mr-4" /><span>About us</span></Link></li>
                        <li className='text-xl py-4 flex items-center'><AiFillTag size={25} className="mr-4" />Promotions</li>
                        <li className='text-xl py-4 flex items-center'><BsFillSaveFill size={25} className="mr-4" />Best one</li>
                        <li className='text-xl py-4 flex items-center'><FaUserFriends size={25} className="mr-4" />Invite Friends</li>
        
                    </ul>
                </nav>
            </div>






        </div>
    )
}

export default Navbar